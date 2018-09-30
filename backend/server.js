const express = require('express');
const bodyParser = require('body-parser');

const api = express.Router();
const app = express();
let data = require('./jobs');
console.log('jobs : ', data.jobs);

// On définit les middlewares (parser et api)
app.use(bodyParser.json());
app.use('/api', api);

// On écoute le port 4201
const port = 4201;
app.listen(port, () => { console.log('listening on port ${port}')})

// On définit les méthodes du service web
api.get('/jobs', (req, res) => { 
    res.json( data.jobs ) 
});
api.get('/jobs/:id', (req, res) => { 
    res.json( { success: true, message: 'getJob(id)' }) 
});

