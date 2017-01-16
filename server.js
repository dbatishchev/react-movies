const express = require('express');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
// const routes = require('./server/routes');
const path = require('path');
// const models = require('./server/models');
// const middleware = require('./server/middleware');
const passport = require('passport');
const errorhandler = require('errorhandler');

const oauth2 = require('./server/auth/oauth2');
const users = require('./server/routes/users');
// const movies = require('./server/routes/movies');

const app = express();

app.set('env', process.env.NODE_ENV || 'development');
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'jade');

// app.locals.title = 'OAuth Example';
// app.locals.pretty = true;

app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser('ncie0fnft6wjfmgtjz8i'));
app.use(cookieParser());
app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2'],
    maxAge: 48 * 60 * 60 * 1000,
}));
app.use(methodOverride());
app.use(passport.initialize());
app.use(express.static(path.join(__dirname, 'public')));

// app.oauth = oauthserver({
//     model: models.oauth,
//     grants: ['password', 'authorization_code', 'refresh_token'],
//     debug: true,
// });

if (app.get('env') === 'development') {
    app.use(errorhandler());
}

// app.get('/', middleware.loadUser, routes.index);

// app.use('/api/movies', movies);
app.use('/api/users', users);
app.use('/api/oauth/token', oauth2.token);

// app.all('/oauth/token', app.oauth.grant());
//
// app.get('/oauth/authorise', function (req, res, next) {
//     if (!req.session.userId) {
//         return res.redirect('/session?redirect=' + req.path + '&client_id=' +
//             req.query.client_id + '&redirect_uri=' + req.query.redirect_uri);
//     }
//
//     res.render('authorise', {
//         client_id: req.query.client_id,
//         redirect_uri: req.query.redirect_uri
//     });
// });

// // Handle authorise
// app.post('/oauth/authorise', function (req, res, next) {
//     if (!req.session.userId) {
//         return res.redirect(`/session?redirect=${req.path}client_id=${req.query.client_id}&redirect_uri=${req.query.redirect_uri}`);
//     }
//     next();
// }, app.oauth.authCodeGrant(function (req, next) {
//     // The first param should to indicate an error
//     // The second param should a bool to indicate if the user did authorise the app
//     // The third param should for the user/uid (only used for passing to saveAuthCode)
//     next(null, req.body.allow === 'yes', req.session.userId, null);
// }));

// app.get('/secret', middleware.requiresUser, function (req, res) {
//     res.send('Secret area');
// });
//
// app.get('/account', middleware.requiresUser, routes.users.show);
// app.get('/session', routes.session.show);
// app.post('/v1/users', routes.users.create);
// app.post('/session', routes.session.create);

app.listen(app.get('port'), '0.0.0.0', (err) => {
    if (err) {
        console.log(err);
    }
    console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', app.get('port'), app.get('port'));
});
