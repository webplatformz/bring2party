const express = require('express');
const jsonServer = require('json-server');

const app = express();

app.use('/api', jsonServer.router('db/db.json'));
app.get('/parties', (req, res) => res.sendFile(__dirname + '/dist/index.html'));
app.get('/party/*', (req, res) => res.sendFile(__dirname + '/dist/index.html'));
app.get('/login', (req, res) => res.sendFile(__dirname + '/dist/index.html'));

app.use(express.static('dist'));


app.listen(4200);
