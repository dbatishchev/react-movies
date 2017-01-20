const faker = require('faker');
const db = require('../server/db/mongoose');
const config = require('../config');

const User = require('../server/models/user');
const Client = require('../server/models/client');
const AccessToken = require('../server/models/accessToken');
const RefreshToken = require('../server/models/refreshToken');

User.remove({}, function(err) {
    var user = new User({
        username: config.get('default:user:username'),
        password: config.get('default:user:password')
    });

    user.save(function(err, user) {
        if(!err) {
            console.info('New user - %s:%s', user.username, user.password);
        }else {
            return console.error(err);
        }
    });
});

Client.remove({}, function(err) {
    var client = new Client({
        name: config.get('default:client:name'),
        clientId: config.get('default:client:clientId'),
        clientSecret: config.get('default:client:clientSecret')
    });

    client.save(function(err, client) {

        if(!err) {
            console.info('New client - %s:%s', client.clientId, client.clientSecret);
        } else {
            return console.error(err);
        }

    });
});

AccessToken.remove({}, function (err) {
    if (err) {
        return console.error(err);
    }
});

RefreshToken.remove({}, function (err) {
    if (err) {
        return console.error(err);
    }
});

setTimeout(() => {
    db.disconnect();
}, 3000);
