const express = require('express');
const path = require('path');
//const apiRoutes = require('./routes/apiRoutes');
//const htmlRoutes = require('./routes/htmlRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
//app.use('/api', apiRoutes);
//app.use('/', htmlRoutes);
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});

// Start server
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
