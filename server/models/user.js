import mongoose from "mongoose";

const User = new mongoose.Schema({
    vkontakteId: {
        type: String,
    },
    facebookId: {
        type: String,
    },
    accessToken: {
        type: String,
    },
    created: {
        type: Date,
        default: Date.now,
    },
});

// todo refactor
User.statics.findOrCreate = function(filters) {
    return this
        .find(filters)
        .then((results) => {
            if(results.length == 0) {
                let newUser = new this();
                if (filters.facebookId) {
                    newUser.facebookId = filters.facebookId;
                }
                if (filters.vkontakteId) {
                    newUser.vkontakteId = filters.vkontakteId;
                }
                return newUser.save();
            } else {
                return Promise.resolve(results[0]);
            }
        });
};

module.exports = mongoose.model("User", User);
