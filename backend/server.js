
const express = require('express');
var cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
let data = require('./jobs');

// On définit les middlewares (parser et api)
app.use(bodyParser.json());
app.use(cors()); // Pour autoriser les appels provenant d'un autre domaine que celui du serveur, l'ajout à la main ne fonctionnant pas.
// app.use((request, result, next) => {
//     request.header('Access-Control-Allow-Origin', '*');
//     request.header('Access-Control-Allow-Header', 'Content-Type');
//     next();
// });

const api = express.Router();

let jobs = data.jobs;
let newJobId = 3;

// On définit les méthodes du service web
api.get('/jobs', (req, res) => { 

    console.log('[SERVEUR] [http://localhost:' + port + '/api/jobs] [GET]');
    res.json( jobs );
});

api.get('/jobs/:id', (request, result) => { 

    console.log('[SERVEUR] [http://localhost:' + port + '/api/jobs/' + request.params.id + '] [GET]');
    const id = parseInt(request.params.id, 10);
    const filteredJobs = jobs.filter(o => o.id === id);
    if (filteredJobs.length == 1)
    {
        return result.json({ success: true, job: filteredJobs[0] });
    }
    else
    {
        return result.json({ success: false, message: 'Aucune offre trouvée ayant pour id ' + id }); 
    }
});

api.post('/jobs', (req, res) => {
    console.log('[SERVEUR] [http://localhost:' + port + '/api/jobs] [POST]');
    
    let job = req.body;
    
    newJobId = newJobId + 1;
    job.id = newJobId;
    
    jobs = [job, ...jobs];
    res.json(job)
});

app.use('/api', api);

// On écoute le port 4201
const port = 4201;
app.listen(port, () => { 
    console.log("listening on port " + port);
});