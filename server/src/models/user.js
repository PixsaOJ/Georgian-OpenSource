const mongoose = require('mongoose');
// require('mongoose-type-url');
let Schema = mongoose.Schema;

var userSchema =  new Schema({
    github_user: {
        type: String,
        required: true
    },
    avatar_url: String,
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    contribs: Number
}, {
    timestamps: {
        currentTime: () => Math.floor(Date.now() / 1000)
    }
});

const user = mongoose.model('user', userSchema);
module.exports = user;