const express = require('express');
const app = express();
const bodyParser = require('body-parser');
let data = require('./jobs');

// On définit les middlewares (parser et api)
app.use(bodyParser.json());
app.use((req, res, next) => {
    req.header("Access-Control-Allow-Origin");
    next();
});


const api = express.Router();

// On définit les méthodes du service web
api.get('/jobs', (req, res) => { 
    res.json( data.jobs );
});

app.use('/api', api);

// On écoute le port 4201
const port = 4201;
app.listen(port, () => { 
    console.log('listening on port ${port}');
});


