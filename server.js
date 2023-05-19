// Import necessary dependencies
const express = require('express');
const path = require('path');
const routes = require('./routes/index');

// Initialize an express app
const app = express();

// Define a port
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware for the static public folder
app.use(express.static(path.join(__dirname, 'public')));

// Use routes from the routes directory
app.use('/api', routes);

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// Start the server
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
