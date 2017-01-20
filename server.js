import errorhandler from "errorhandler";
import passport from "passport";
import path from "path";
import methodOverride from "method-override";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";
import cookieSession from "cookie-session";
import User from "./server/models/user";

const app = express();

app.set("env", process.env.NODE_ENV || "development");
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "server/views"));
app.set("view engine", "jade");

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
        clientID:     "5831449", // VK.com docs call it 'API ID', 'app_id', 'api_id', 'client_id' or 'apiId'
        clientSecret: "RyJJO8FQHdm8x3YxfxlQ",
        callbackURL:  "http://localhost:3000/auth/vkontakte/callback"
    },
    function myVerifyCallbackFn(accessToken, refreshToken, params, profile, done) {
        User.findOrCreate({ vkontakteId: profile.id })
            .then(function (user) { done(null, user); })
            .catch(done);
    }
));

//This function will pass callback, scope and request new token
app.get("/auth/vkontakte", passport.authenticate("vkontakte"));

app.get("/auth/vkontakte/callback",
    passport.authenticate("vkontakte", {
        successRedirect: "/",
        failureRedirect: "/login"
    })
);

app.get("/", function(req, res) {
    //Here you have an access to req.user
    res.json(req.user);
});

app.listen(app.get("port"), "0.0.0.0", (err) => {
    if (err) {
        console.log(err);
    }
    console.info("==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.", app.get("port"), app.get("port"));
});
