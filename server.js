const express = require('express');
const path = require('path');
const indexRoutes = require('./routes/index');
const notesRoutes = require('./routes/notes');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Set up routes
app.use('/', indexRoutes);
app.use('/api/notes', notesRoutes);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} `)
);
