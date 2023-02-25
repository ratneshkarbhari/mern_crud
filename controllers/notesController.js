const Note = require("../models/note");


const fetchNotes = async(req,res)=>{
    const notes = await Note.find()
    res.json({notes: notes})
}


const fetchNote = async(req,res)=>{
    let noteId = req.params.id;
    const notes = await Note.findById(noteId)
    res.json({notes: notes})
}

const createNote = async(req,res)=>{
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

}

const updateNote = async(req,res)=>{
    let noteId = req.params.id;

    let title = req.body.title
    let body = req.body.body

    const notes = await Note.findByIdAndUpdate(noteId,{
        title : title,
        body : body
    })
    res.json({notes: notes})

}

const deleteNote = async(req,res)=>{

    let noteId = req.params.id;
    const deleted = await Note.findByIdAndDelete(noteId)
    if (deleted) {
        const notes = await Note.find()
        res.json({"message": "Note Deleted"})
    } else {
        res.json({"message": "Note Not deleted"})    
    }
}

module.exports = {
    fetchNotes: fetchNotes,
    fetchNote: fetchNote,
    createNote: createNote,
    updateNote: updateNote,
    deleteNote: deleteNote
}