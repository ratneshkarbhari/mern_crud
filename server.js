// import dependencies
require('dotenv').config()
const express = require("express")
const connect_to_db = require('./config/connect_to_db')
const app = express()
const notesController = require("./controllers/notesController");

// configure express to read json
app.use(express.json())

connect_to_db()

app.get("/",(req,res)=>{
    res.json({"hello" : "S"})
})


app.get("/notes",notesController.fetchNotes)

app.get("/notes/:id", notesController.fetchNote)

app.post("/notes",notesController.createNote)

app.put("/notes/:id",notesController.updateNote)

app.delete("/notes/:id",notesController.deleteNote)

app.listen(process.env.PORT)