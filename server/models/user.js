import mongoose from "mongoose";

const User = new mongoose.Schema({
    // username: {
    //     type: String,
    //     unique: true,
    //     required: true,
    // },
    vkontakteId: {
        type: String
    },
    access_token: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now,
    },
});

// todo refactor
User.statics.findOrCreate = function(filters, cb) {
    this.find(filters, function(err, results) {
        if(results.length == 0) {
            let newUser = new User();
            newUser.facebookId = filters.facebookId;
            newUser.save(function(err, doc) {
                cb(err, doc)
            });
        } else {
            cb(err, results[0]);
        }
    });
};

module.exports = mongoose.model("User", User);
