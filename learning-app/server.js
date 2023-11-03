const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
const url = "mongodb+srv://alekseinech77:vQeq7uS22Kvto60V@ac-kfczevx-shard-00-00.tvt8xx1.mongodb.net/test?retryWrites=true&w=majority";



const dbName = 'Cluster0';
const client = new MongoClient(url);

app.use(bodyParser.json());

MongoClient.connect(url, (err, client) => {
    if (err) {
        console.error('Failed to connect to MongoDB', err);
        process.exit(1); // Exit the process with an error code
    }
  
    console.log('Connected successfully to MongoDB');
    const db = client.db(dbName);
    const collection = db.collection('users');

    app.post('/register', (req, res) => {
        collection.insertOne({str: "name"}, (err, result) => {
            if (err) {
                console.error('Error registering new user', err);
                res.status(500).send('Error registering new user');
            } else {
                res.status(201).send('User registered');
            }
        });
    });

    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}/`);
    });
});
