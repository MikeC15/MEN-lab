const mongoose = require("mongoose")

const actorSchema = new mongoose.Schema({
    name: String,
    age: Number,
    movies: Array
})

const Actor = mongoose.model("Actor", actorSchema)

module.exports = Actor;