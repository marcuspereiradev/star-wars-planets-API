import Planet from '../models/Planet';
import StarWarsAPI from '../services/StarWarsAPI';

const index = async (request, response) => {
  const name = request.query.name;

  const planetByName = await Planet.find({ name: new RegExp(name, 'i') });
  const allPlanets = await Planet.find({});

  const planets = (name) ? planetByName : allPlanets;

  return response.status(200).json(planets);
};

const show = async (request, response) => {
  const _id = request.params.id;

  const planetById = await Planet.findById({ _id });

  return response.status(200).json(planetById);
};

const create = async (request, response) => {
  const { name, climate, terrain } = request.body;

  const nameExists = await Planet.findOne({ name });
  if (nameExists) return response.json(nameExists);

  const gotPlanet = await StarWarsAPI.fetchPlanets(name);
  const films = Object.keys(gotPlanet.films).length;

  const PlanetData = await Planet.create({
    name,
    climate,
    terrain,
    films
  });

  return response.status(201).json(PlanetData);
};

const destroy = async (request, response) => {
  const _id = request.params.id;

  const destroyed = await Planet.deleteOne({ _id });

  return response.status(204).json(destroyed);
};

export {
  index,
  show,
  create,
  destroy,
};
