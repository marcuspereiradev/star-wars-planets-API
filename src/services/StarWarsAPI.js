const axios = require('axios');

class StarWarsAPI {
  static async fetchStarWarsAPI() {
    const response = await axios.get('https://swapi.co/api/planets/');
    return response.data;
  }
}

module.exports = StarWarsAPI;
