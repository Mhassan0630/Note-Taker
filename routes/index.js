const path = require('path');

const express = require('express');
const app = express();
const notesRouter = require('./notes');
app.use('/notes', express.static(path.join(__dirname, 'public')));


module.exports = app;
