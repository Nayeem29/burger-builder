const express = require('express');
const cors = require('cors'); // cross origin resource share
const app = express();

app.use(cors());
app.use(express.json());

module.exports = app;