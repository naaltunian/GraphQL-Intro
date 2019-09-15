const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: String,
    category: {
        type: String,
        required: true
    },
    pageCount: Number,
    dateAddedToLibrary: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model("Book", BookSchema);