const { default: mongoose } = require("mongoose");

const noteSchema = new mongoose.Schema({
    title : String,
    body : String
})

const note = mongoose.model("Note",noteSchema);

module.exports = note;