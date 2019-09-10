const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: String,
    favoriteMovies: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Movie'
    }
});

module.exports = mongoose.model("User", UserSchema);