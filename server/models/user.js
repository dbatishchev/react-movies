import mongoose from "mongoose";

var User = new mongoose.Schema({
    vkontakteId: {
        type: String
    },
    facebookId: {
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
User.statics.findOrCreate = function(filters) {
    return this
        .find(filters)
        .then((results) => {
            if(results.length == 0) {
                let newUser = new User();
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
