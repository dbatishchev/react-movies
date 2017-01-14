exports.up = function (db, next) {
    let movies = db.collection("movies");
    movies.insert([{title: "test01"}, {title: "test02"}, {title: "test03"}, {title: "test04"}, {title: "test05"}], next);
};

exports.down = function (db, next) {
    let movies = db.collection("movies");
    movies.findAndModify({}, [], {}, {remove: true}, next);
};
