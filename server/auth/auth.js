const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;
const ClientPasswordStrategy = require('passport-oauth2-client-password').Strategy;
const BearerStrategy = require('passport-http-bearer').Strategy;

const config = require('../../config');
const User = require('../models/user');
const Client = require('../models/client');
const AccessToken = require('../models/accessToken');

passport.use(new BasicStrategy(
    function (username, password, done) {
        Client.findOne({clientId: username}, (err, client) => {
            if (err) {
                return done(err);
            }

            if (!client) {
                return done(null, false);
            }

            if (client.clientSecret !== password) {
                return done(null, false);
            }

            return done(null, client);
        });
    }
));

passport.use(new ClientPasswordStrategy(
    function (clientId, clientSecret, done) {
        Client.findOne({clientId: clientId}, (err, client) => {
            if (err) {
                return done(err);
            }

            if (!client) {
                return done(null, false);
            }

            if (client.clientSecret !== clientSecret) {
                return done(null, false);
            }

            return done(null, client);
        });
    }
));

passport.use(new BearerStrategy(
    function (accessToken, done) {
        AccessToken.findOne({token: accessToken}, (err, token) => {

            if (err) {
                return done(err);
            }

            if (!token) {
                return done(null, false);
            }

            if (Math.round((Date.now() - token.created) / 1000) > config.get('security:tokenLife')) {

                AccessToken.remove({token: accessToken}, function (err) {
                    if (err) {
                        return done(err);
                    }
                });

                return done(null, false, {message: 'Token expired'});
            }

            User.findById(token.userId, function (err, user) {

                if (err) {
                    return done(err);
                }

                if (!user) {
                    return done(null, false, {message: 'Unknown user'});
                }

                var info = {scope: '*'};
                done(null, user, info);
            });
        });
    }
));