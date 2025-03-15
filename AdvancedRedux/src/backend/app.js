import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs/promises';

const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/', async (req, res) => {
    const data = await fs.readFile('./data/data.js', 'utf8');
    const parsedData = JSON.parse(data);
    res.send(parsedData[0].order);
})

app.put('/api/v1/', async (req, res) => {
    const data = req.body;
    const stringData = JSON.stringify(data);
    console.log(stringData);
    const write = await fs.writeFile('./data/data.js', stringData);
    res.send("Request received");
})

app.listen(3001, () => {
    console.log('Server is running on http://localhost:3001');
});