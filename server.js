import errorhandler from "errorhandler";
import passport from "passport";
import path from "path";
import methodOverride from "method-override";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";
import cookieSession from "cookie-session";
import {Strategy as VKontakteStrategy} from "passport-vkontakte";
import {Strategy as FacebookStrategy} from "passport-facebook";
import {Strategy as BearerStrategy} from "passport-http-bearer";
import db from "./server/db/mongoose";
import User from "./server/models/user";

//routes
import movies from './server/routes/movies';
import categories from './server/routes/categories';
import persons from './server/routes/persons';

const isDeveloping = process.env.NODE_ENV !== 'production';
const app = express();

app.set("env", process.env.NODE_ENV || "development");
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "server/views"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cookieSession({
    name: "session",
    keys: ["key1", "key2"],
    maxAge: 48 * 60 * 60 * 1000,
}));
app.use(methodOverride());
app.use(passport.initialize());
app.use(express.static(path.join(__dirname, "public")));

if (app.get("env") === "development") {
    app.use(errorhandler());
}

app.use(passport.initialize());
app.use(passport.session());

passport.use(new VKontakteStrategy(
    {
        clientID:     "5831813", // VK.com docs call it 'API ID', 'app_id', 'api_id', 'client_id' or 'apiId'
        clientSecret: "wNxqgTp4vSi20nZO5qUm",
        callbackURL:  "http://localhost:3000/auth/vkontakte/callback"
    },
    function successCallback(accessToken, refreshToken, params, profile, done) {
        User.findOrCreate({ vkontakteId: profile.id })
            .then((user) => {
                user.accessToken = accessToken;
                user.save().then(done(null, user));
            })
            .catch(done);
    }
));

passport.use(new FacebookStrategy(
    {
        clientID:     "1146609448793098",
        clientSecret: "4eb060477de5409845e15ab039872237",
        callbackURL:  "http://localhost:3000/auth/facebook/callback"
    },
    function successCallback(accessToken, refreshToken, params, profile, done) {
        User.findOrCreate({ facebookId: profile.id })
            .then((user) => {
                user.accessToken = accessToken;
                user.save().then(done(null, user));
            })
            .catch(done);
    }
));

passport.use(
    new BearerStrategy(
        function(token, done) {
            User.findOne({ accessToken: token },
                function(err, user) {
                    if(err) {
                        return done(err)
                    }
                    if(!user) {
                        return done(null, false)
                    }

                    return done(null, user, { scope: "all" })
                }
            );
        }
    )
);

app.get(
    "/auth/facebook",
    passport.authenticate("facebook", { session: false, scope: [] })
);

app.get("/auth/facebook/callback",
    passport.authenticate("facebook", {
        session: false,
    }),
    function(req, res) {
        res.redirect("/?accessToken=" + req.user.accessToken);
    }
);

//This function will pass callback, scope and request new token
app.get(
    "/auth/vkontakte",
    passport.authenticate("vkontakte", { session: false })
);

app.get("/auth/vkontakte/callback",
    passport.authenticate("vkontakte", {
        session: false,
    }),
    function (req, res) {
        res.redirect("/?accessToken=" + req.user.accessToken);
    }
);

app.get("/api/userinfo", passport.authenticate("bearer", {session: false}),
    (req, res) => {
        res.json({ userId: req.user.id, name: req.user.name, scope: req.authInfo.scope });
    }
);

// app.get(
//     "/profile",
//     passport.authenticate("bearer", { session: false }),
//     function(req, res) {
//         res.send("LOGGED IN as " + req.user.facebookId + " - <a href=\"/logout\">Log out</a>");
//     }
// );

app.use('/api/', movies);
app.use('/api/', categories);
app.use('/api/', persons);

if (isDeveloping) {
    const webpack = require("webpack");
    const webpackMiddleware = require("webpack-dev-middleware");
    const config = require("./webpack.config.js");

    const compiler = webpack(config);
    const middleware = webpackMiddleware(compiler, {
        publicPath: config.output.publicPath,
        noInfo: true,
        quiet: false,
        lazy: false,
        watchOptions: {
            aggregateTimeout: 300,
            poll: true
        },
        stats: {
            colors: true,
        }
    });

    const bundlePath = path.join(__dirname, './public/build/index.html');

    app.use(middleware);
    app.get('*', function response(req, res) {
        res.write(middleware.fileSystem.readFileSync(bundlePath));
        res.end();
    });
} else {
    app.use(express.static(__dirname + './public/build'));
    app.get('*', function response(req, res) {
        res.sendFile(path.join(__dirname, './public/build/index.html'));
    });
}

app.listen(app.get("port"), "0.0.0.0", (err) => {
    if (err) {
        console.log(err);
    }
    console.info("==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.", app.get("port"), app.get("port"));
});
