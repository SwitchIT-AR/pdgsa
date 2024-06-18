import express from 'express';
import { google } from 'googleapis';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 5001;

app.use(cors());
app.use(bodyParser.json());

const auth = new google.auth.GoogleAuth({
    keyFile: './new-webs-424720-cdbde6a8070d.json', // Update the path here
    scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
        'https://www.googleapis.com/auth/drive'
    ],
});

const sheets = google.sheets({ version: 'v4', auth });
const drive = google.drive({ version: 'v3', auth });

const spreadsheetId = '1zwp3pbb9sNnF6trygRXUsMLm-GROSpx4lU2gD9NmmvY';
const folderId = '1-Wy5YMot0lqLLVA4hwpmGHTkw7glXeVp'; // Your Drive folder ID

app.post('/submit', async (req, res) => {
    const { name, mail, body } = req.body;
    const timestamp = new Date().toLocaleString();
    const project = req.headers.referer || 'unknown';
    try {
        const client = await auth.getClient();
        const request = {
            spreadsheetId,
            range: 'contact!A2:E',
            valueInputOption: 'RAW',
            insertDataOption: 'INSERT_ROWS',
            resource: {
                values: [[name, mail, body, timestamp, project]],
            },
            auth: client,
        };
        const response = await sheets.spreadsheets.values.append(request);
        res.status(200).send(response.data);
    } catch (error) {
        console.error('Error writing to Google Sheets:', error);
        res.status(500).send('Error writing to Google Sheets.');
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

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
