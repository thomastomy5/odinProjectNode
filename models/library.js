const mongoose = require('mongoose')
const Schema = mongoose.Schema

const librarySchema = new Schema({
    name: String,
    author : String
}
)

module.exports = mongoose.model("libraryModel", librarySchema)