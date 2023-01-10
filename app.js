const express = require('express');
const axios = require('axios');
const app = express();
const routes = require('./routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(routes);

const port = process.env.PORT || 8000;

app.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://api.jikan.moe/v4/anime/1/');
        // const data = JSON.parse(response)
        console.log(response.data.data)
        res.json(response.data)
    } catch (error) {
        console.log(error)
    }
})

app.listen(port, () => {
    console.log("Listening on port " + port);
})

// database connection below
// DATABASE_URL='mysql://mnw2xwm0puko4vpnk8mm:pscale_pw_Eh73SGUetQnHBZB8xUJVUqMUVC3kKsMmEkVhth87sEz@ap-southeast.connect.psdb.cloud/anime-listing?ssl={"rejectUnauthorized":true}'