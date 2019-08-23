const axios = require('axios');

class StarWarsAPI {
  static async getPlanet(url, name) {
    const response = await axios.get(url);

    const foundPlanet = response.data.results.find(item => {
      return item.name === name;
    });

    return (!foundPlanet) ? StarWarsAPI.getPlanet(response.data.next, name) : foundPlanet;
  }

  static async fetchPlanets(name) {
    const url = 'https://swapi.co/api/planets/';

    const response = await StarWarsAPI.getPlanet(url, name);

    return Object.keys(response.films).length;
  }
}

module.exports = StarWarsAPI;
