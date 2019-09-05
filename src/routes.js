import express from 'express';
import { index, show, create, destroy } from './controllers/PlanetController';

const routes = express.Router();

routes.get('/planets', index);
routes.get('/planets/:id', show);
routes.post('/planets', create);
routes.delete('/planets/:id', destroy);

export default routes;
