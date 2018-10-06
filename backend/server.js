
const express = require('express');
var cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
let data = require('./jobs');

// On définit les middlewares (parser et api)
app.use(bodyParser.json());
app.use(cors()); // Pour autoriser les appels provenant d'un autre domaine que celui du serveur

const api = express.Router();

// On définit les méthodes du service web
api.get('/jobs', (req, res) => { 
    console.log('api.get() appelé');
    res.json( data.jobs );
});

api.post('/jobs', (req, res) => {
    console.log('api.post() appelé');
    const job = req.body;
    console.log(job);
});

app.use('/api', api);

// On écoute le port 4201
const port = 4201;
app.listen(port, () => { 
    console.log('listening on port ${port}');
});