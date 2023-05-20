const router = require("express").Router();
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

const notesFilePath = './db/db.json';

// Helper function to read notes from file
function readNotesFromFile() {
  const data = fs.readFileSync(notesFilePath, 'utf8');
  return JSON.parse(data);
}

// Helper function to write notes to file
function writeNotesToFile(notes) {
  fs.writeFileSync(notesFilePath, JSON.stringify(notes, null, 2));
}

// GET "/api/notes"
router.get("/notes", (req, res) => {
  const notes = readNotesFromFile();
  res.json(notes);
});

// POST "/api/notes"
router.post("/notes", (req, res) => {
  const notes = readNotesFromFile();
  
  const newNote = {
    id: uuidv4(),
    title: req.body.title,
    text: req.body.text,
  };

  notes.push(newNote);

  writeNotesToFile(notes);

  res.json(newNote);
});

// DELETE "/api/notes/:id"
router.delete("/notes/:id", (req, res) => {
  const noteId = req.params.id;

  let notes = readNotesFromFile();

  notes = notes.filter((note) => note.id !== noteId);

  writeNotesToFile(notes);

  res.json({ ok: true });
});

module.exports = router;
