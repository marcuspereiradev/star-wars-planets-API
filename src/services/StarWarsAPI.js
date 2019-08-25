const axios = require('axios');

class StarWarsAPI {
  static async FindOnePlanet(url, name) {
    const response = await axios.get(url);

    const foundPlanet = response.data.results.find(item => {
      return item.name === name;
    });

    return (!foundPlanet) ? StarWarsAPI.FindOnePlanet(response.data.next, name) : foundPlanet;
  }

  static async fetchPlanets(name) {
    const url = 'https://swapi.co/api/planets/';

    return await StarWarsAPI.FindOnePlanet(url, name);
  }
}

module.exports = StarWarsAPI;
