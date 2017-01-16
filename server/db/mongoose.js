const mongoose = require('mongoose');
const config = require('../../config');

mongoose.connect(config.get('mongoose:uri'));

// var db = mongoose.connection;
//
// db.on('error', function (err) {
//     log.error('Connection error:', err.message);
// });
//
// db.once('open', function callback () {
//     log.info("Connected to DB!");
// });

module.exports = mongoose;