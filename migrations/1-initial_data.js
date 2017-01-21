module.exports.id = "initial_data";

module.exports.up = function (done) {
    this.db.collection('movies').insert([{title: "test01"}, {title: "test02"}, {title: "test03"}, {title: "test04"}, {title: "test05"}], done);
};

module.exports.down = function (done) {
    this.db.collection('movies').findAndModify({}, [], {}, {remove: true}, done);
};