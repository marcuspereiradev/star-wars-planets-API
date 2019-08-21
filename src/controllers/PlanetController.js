const Planet = require('../models/Planet');
const StarWarsAPI = require('../services/StarWarsAPI');

module.exports = {
  async index(request, response) {
    const name = request.query.name;

    if (name) {
      const planetByName = await Planet.find({ name: new RegExp(name, 'i') });
      return response.json(planetByName);
    } else {
      await Planet.find({}, (err, planets) => {
        const allPlanets = {};

        planets.forEach(planet => {
          allPlanets[planet._id] = planet;
        });

        return response.json(allPlanets);
      })
    }
  },

  async show(request, response) {
    const _id = request.params.id;

    const planetById = await Planet.findById({ _id });

    return response.json(planetById);
  },

  async create(request, response) {
    const { name, climate, terrain } = request.body;

    const nameExists = await Planet.findOne({ name });

    if (nameExists) return response.json(nameExists);

    const films = await StarWarsAPI.fetchStarWarsAPI();

    const PlanetData = await Planet.create({
      name,
      climate,
      terrain,
    });

    return response.json(PlanetData)
  },

  async delete(request, response) {
    const _id = request.params.id;

    const deleted = await Planet.deleteOne({ _id });

    return response.json(deleted);
  }
}
