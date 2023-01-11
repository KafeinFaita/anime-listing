require('dotenv').config();

const express = require('express');
const app = express();
const session = require('express-session');
const routes = require('./routes');

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { 
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000
     }
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(routes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log("Listening on port " + port);
})

// database connection below
// DATABASE_URL='mysql://mnw2xwm0puko4vpnk8mm:pscale_pw_Eh73SGUetQnHBZB8xUJVUqMUVC3kKsMmEkVhth87sEz@ap-southeast.connect.psdb.cloud/anime-listing?ssl={"rejectUnauthorized":true}'