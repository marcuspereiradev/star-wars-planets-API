const express = require('express');
const Planet = require('./controllers/PlanetController');

const routes = express.Router();

routes.get('/planets', Planet.index);
routes.post('/planets', Planet.create);
routes.delete('/planets/:id', Planet.delete);

module.exports = routes;
