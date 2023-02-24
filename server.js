// import dependencies
require('dotenv').config()
const express = require("express")
const connect_to_db = require('./config/connect_to_db')
const app = express()
const Note = require("./models/note");

// configure express to read json
app.use(express.json())

connect_to_db()

app.get("/",(req,res)=>{
    res.json({"hello" : "S"})
})


app.get("/notes", async(req,res)=>{
    const notes = await Note.find()
    res.json({notes: notes})
})

app.get("/notes/:id", async(req,res)=>{
    let noteId = req.params.id;
    const notes = await Note.findById(noteId)
    res.json({notes: notes})
})

app.post("/notes", async(req,res)=>{
    // get the data sent in request body
    let title = req.body.title
    let body = req.body.body
    // create a note with it
    let note = await Note.create({
        title : title,
        body : body
    })
    // repond with new note

    res.json({note:note})

})

app.put("/notes/:id",async(req,res)=>{
    let noteId = req.params.id;

    let title = req.body.title
    let body = req.body.body

    const notes = await Note.findByIdAndUpdate(noteId,{
        title : title,
        body : body
    })
    res.json({notes: notes})

})

app.delete("/notes/:id",async(req,res)=>{

    let noteId = req.params.id;
    const deleted = await Note.findByIdAndDelete(noteId)
    if (deleted) {
        const notes = await Note.find()
        res.json({"message": "Note Deleted"})
    } else {
        res.json({"message": "Note Not deleted"})    
    }
})

app.listen(process.env.PORT)