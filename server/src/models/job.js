const mongoose = require('mongoose');
let Schema = mongoose.Schema;

var jobSchema =  new Schema({
    user_id: String,
    accepted_by: String,
    description: String,
    offered_price: Number
}, {
    timestamps: {
        currentTime: () => Math.floor(Date.now() / 1000)
    }
});

const job = mongoose.model('job', jobSchema);
module.exports = job;