require('dotenv').config();

const express = require('express');
const app = express();
const session = require('express-session');
const routes = require('./routes');

app.use(session({
    proxy: process.env.NODE_ENV === 'production' ? true : false,
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { 
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000,
        sameSite: process.env.NODE_ENV === "production" ? 'none' : 'lax', // must be 'none' to enable cross-site delivery
        secure: process.env.NODE_ENV === "production", // must be true if sameSite='none'
     }
}));

console.log(process.env.NODE_ENV)

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(routes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log("Listening on port " + port);
})


/*
to-dos:
1. hide anime review form when user is not logged in.
2. when a user has already submitted a review to an anime, he can't submit a new review
3. display anime user reviews. Display a message saying there are no reviews if, well, there are no reviews
4. clean up console.logs and fix error handling for database queries
5. make whole app responsive
*/