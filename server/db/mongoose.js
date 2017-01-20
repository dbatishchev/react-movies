import mongoose from "mongoose";

// todo
mongoose.connect("mongodb://localhost/movies");

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