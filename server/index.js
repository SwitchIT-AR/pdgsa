import express from 'express';
import { google } from 'googleapis';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';

const app = express();
const port = 8088;

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev')); // Add morgan middleware for logging

const sheets = google.sheets('v4');
const auth = new google.auth.GoogleAuth({
    keyFile: './pdgsa-webs-clientes-c4185f428021.json', // Update the path here
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const spreadsheetId = '1zwp3pbb9sNnF6trygRXUsMLm-GROSpx4lU2gD9NmmvY';

app.post('/submit', async (req, res) => {
    const { name, mail, body, phone } = req.body;
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
                values: [[name, mail,phone, body, timestamp, project]],
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

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});