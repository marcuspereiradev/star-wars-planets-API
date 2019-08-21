const Planet = require('../models/Planet');
const StarWarsAPI = require('../services/StarWarsAPI');

module.exports = {
  async index(request, response) {
    await Planet.find({}, (err, planets) => {
      const allPlanets = {};

      planets.forEach(planet => {
        allPlanets[planet._id] = planet;
      });

      response.json(allPlanets);
    })
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

    await Planet.deleteOne({ _id }, (err, result) => {
      console.log('deleted');
    });

    return response.json({ ok: 'opa' })
  }
}
