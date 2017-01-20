import mongoose from "mongoose";

const User = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    created: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("User", User);
