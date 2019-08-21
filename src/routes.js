const express = require('express');
const Planet = require('./controllers/PlanetController');

const routes = express.Router();

routes.get('/planets', Planet.index);
routes.get('/planets/:id', Planet.show);
routes.post('/planets', Planet.create);
routes.delete('/planets/:id', Planet.delete);

module.exports = routes;
