
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
api.get('/jobs', (request, response) => { 
    console.log('[SERVEUR] [http://localhost:' + port + '/api/jobs] [GET]');
    response.json( jobs );
});

var jobs = data.jobs;
api.post('/jobs', (request, response) => {
    console.log('[SERVEUR] [http://localhost:' + port + '/api/jobs] [POST]');
    const job = request.Body;
    // console.log(request.body);
    jobs.push(job);
    //jobs = [job, ...jobs];
    response.json(job);
});

app.use('/api', api);

// On écoute le port 4201
const port = 4201;
app.listen(port, () => { 
    jobs = data.jobs;
    console.log("listening on port " + port);
});