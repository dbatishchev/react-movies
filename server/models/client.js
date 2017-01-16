const mongoose = require('mongoose');

const Client = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    clientId: {
        type: String,
        unique: true,
        required: true,
    },
    clientSecret: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Client', Client);
