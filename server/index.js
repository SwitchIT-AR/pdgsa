import express from 'express';
import { google } from 'googleapis';
import bodyParser from 'body-parser';
import cors from 'cors';
import { exec } from 'child_process';

const app = express();
const port = 8088;

app.use(cors());
app.use(bodyParser.json());

const auth = new google.auth.GoogleAuth({
  keyFile: '../production.json', // Update the path here
  scopes: [
    'https://www.googleapis.com/auth/spreadsheets',
    'https://www.googleapis.com/auth/drive',
  ],
});

const sheets = google.sheets({ version: 'v4', auth });
const drive = google.drive({ version: 'v3', auth });

//const spreadsheetId = '1DavlnUiV9q1M8IwwXhvHmp-kKXWeYAWxPOOFVI75HWc'

const spreadsheetId = '1zwp3pbb9sNnF6trygRXUsMLm-GROSpx4lU2gD9NmmvY';

const folderId = '1-Wy5YMot0lqLLVA4hwpmGHTkw7glXeVp'; // Your Drive folder ID

const vrifyToken = 'a11b75c8d7645008b3e5cc91428a6fbe';

app.post('/submit', async (req, res) => {
  const { name, mail, body, phone, codename } = req.body;
  const timestamp = new Date().toLocaleString();
  const project = req.headers.referer || 'unknown';

  try {
    // 1. Guardar en Google Sheets
    const client = await auth.getClient();
    const request = {
      spreadsheetId,
      range: 'contact!A2:E',
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      resource: {
        values: [[name, mail, phone, body, timestamp, project]],
      },
      auth: client,
    };

    const response = await sheets.spreadsheets.values.append(request);

    if (!response.ok) {
      console.error(
        'Error en webhook de managio:',
        await webhookResponse.text()
      );
    }

    // 2. Enviar al webhook de managio (desde el backend)
    const webhookResponse = await fetch(
      'https://vtc-api.managio.com.ar/api/webhook/google-forms',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          verifyToken: vrifyToken,
          firstName: name,
          lastName: name,
          phoneNumber: phone,
          emailAddress: mail,
          projectCodename: codename,
          origin: 'Web',
        }),
      }
    );

    if (!webhookResponse.ok) {
      console.error(
        'Error en webhook de managio:',
        await webhookResponse.text()
      );
      // Decidí si querés que falle o no si managio falla
      // throw new Error('Error al enviar a managio');
    }

    // 3. Responder al frontend
    res.status(200).json({
      success: true,
      message: 'Formulario enviado correctamente',
    });
  } catch (error) {
    console.error('Error en el proceso:', error);
    res.status(500).json({
      success: false,
      error: 'Error al procesar el formulario',
    });
  }
});

app.get('/data', async (req, res) => {
  try {
    const client = await auth.getClient();
    const request = {
      spreadsheetId,
      range: 'contact!A:E',
      auth: client,
    };
    const response = await sheets.spreadsheets.values.get(request);
    res.status(200).send(response.data);
  } catch (error) {
    console.error('Error reading from Google Sheets:', error);
    res.status(500).send('Error reading from Google Sheets.');
  }
});

const transformData = (data) => {
  const transformedData = {};
  data.forEach((item) => {
    if (item[0] && item[1]) {
      transformedData[item[0]] = item[1];
    }
  });
  return transformedData;
};

app.get('/landing', async (req, res) => {
  try {
    const client = await auth.getClient();
    const request = {
      spreadsheetId,
      range: 'JDF!A1:Z1000', // Adjust the range as needed
      auth: client,
    };
    const response = await sheets.spreadsheets.values.get(request);
    const transformedData = transformData(response.data.values);
    res.status(200).send(transformedData);
  } catch (error) {
    console.error('Error reading from Google Sheets:', error);
    res.status(500).send('Error reading from Google Sheets.');
  }
});

// Function to list files in a Google Drive folder
const listFilesInFolder = async (folderId) => {
  const client = await auth.getClient();
  const res = await drive.files.list({
    q: `'${folderId}' in parents and trashed = false`,
    fields: 'files(id, name, mimeType)',
    auth: client,
  });
  return res.data.files;
};

// Endpoint to get the list of files in the specified folder
app.get('/drive/files', async (req, res) => {
  try {
    const files = await listFilesInFolder(folderId);
    res.status(200).send(files);
  } catch (error) {
    console.error('Error listing files from Google Drive:', error);
    res.status(500).send('Error listing files from Google Drive.');
  }
});

// Function to get the file metadata
const getFileMetadata = async (fileId) => {
  const client = await auth.getClient();
  const res = await drive.files.get({
    fileId,
    fields: 'id, name, mimeType, webViewLink, webContentLink',
    auth: client,
  });
  return res.data;
};

// Endpoint to get metadata of a specific file
app.get('/drive/file/:fileId', async (req, res) => {
  const { fileId } = req.params;
  try {
    const metadata = await getFileMetadata(fileId);
    res.status(200).send(metadata);
  } catch (error) {
    console.error('Error getting file metadata from Google Drive:', error);
    res.status(500).send('Error getting file metadata from Google Drive.');
  }
});

app.get('/pull', (req, res) => {
  const repositoryPath = '../'; // Update the path to your repository here

  exec(`cd ${repositoryPath} && git pull`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return res.status(500).send(`Error: ${stderr}`);
    }
    res.send(`Output: ${stdout}`);
  });
});

app.get('/:sheetName', async (req, res) => {
  const { sheetName } = req.params;
  try {
    const client = await auth.getClient();
    const request = {
      spreadsheetId,
      range: `${sheetName}!A1:B320`, // Use the sheetName from the route parameter
      auth: client,
    };
    const response = await sheets.spreadsheets.values.get(request);
    const transformedData = transformData(response.data.values);
    res.status(200).send(transformedData);
  } catch (error) {
    console.error('Error reading from Google Sheets:', error);
    res.status(500).send('Error reading from Google Sheets.');
  }
});

// New GET endpoint to pull the latest commits from the repository

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
