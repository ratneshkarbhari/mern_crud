require('dotenv').config()
const mongoose = require("mongoose")

async function connect_to_db(){
    try {
        await mongoose.connect(process.env.DB_URL);
    } catch (error) {
        console.log(error)
    }
}

module.exports = connect_to_db;