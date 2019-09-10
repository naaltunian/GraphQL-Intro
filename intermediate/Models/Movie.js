const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String
});

module.exports = mongoose.model("Movie", MovieSchema);