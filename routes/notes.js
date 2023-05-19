const express = require("express");
const fs = require("fs");
const router = require('express').Router();
const db = require("../db/db.json")

router.get("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        const notes = JSON.parse(data);
        res.json(notes);
    });
});

router.post("/api/notes", (req, res) => {
    const newNote = {
        id: Math.floor(Math.random()*10000000),
        title: req.body.title,
        text: req.body.text,
    };
    const notes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    notes.push(newNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(notes));
    res.json(newNote);
});

router.delete("/api/notes/:id", (req, res) => {
    const notes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    const noteId = req.params.id;
    console.log(notes);
    console.log(noteId);
    const updatedNotes = notes.filter((note) => note.id != noteId);
    fs.writeFileSync("./db/db.json", JSON.stringify(updatedNotes));
    res.json(updatedNotes);
});

module.exports = router;
