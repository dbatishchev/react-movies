exports.up = function (db, next) {
    db.collection('movies').insert([{title: "test01"}, {title: "test02"}, {title: "test03"}, {title: "test04"}, {title: "test05"}], next);
    db.collection('users').insert([{
        email: 'alex@example.com',
        hashed_password: '$2a$10$aZB36UooZpL.fAgbQVN/j.pfZVVvkHxEnj7vfkVSqwBOBZbB/IAAK'
    }], next);
    db.collection('oauth_clients').insert([{
        clientId: 'papers3',
        clientSecret: '123',
        redirectUri: '/oauth/redirect',
    }], next);
};

exports.down = function (db, next) {
    db.collection('movies').findAndModify({}, [], {}, {remove: true}, next);
    db.collection('users').findAndModify({}, [], {}, {remove: true}, next);
    db.collection('oauth_clients').findAndModify({}, [], {}, {remove: true}, next);
};
