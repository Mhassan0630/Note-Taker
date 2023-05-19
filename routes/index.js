const path = require('path');
const express = require('express');
const router = express.Router();
const notesRouter = require('./notes');

router.use('/notes', notesRouter);
router.use('/', express.static(path.join(__dirname, '../public')));

module.exports = router;

