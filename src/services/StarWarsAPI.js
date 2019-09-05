import axios from 'axios';

class StarWarsAPI {
  static fetchPlanets = async (name, url) => {
    url = 'https://swapi.co/api/planets/';

    const response = await axios.get(url);
    const { results, next } = response.data;

    const foundPlanet = results.find(item => {
      return item.name === name;
    });

    const nextUrl = StarWarsAPI.fetchPlanets(name, next);

    return (!foundPlanet) ? nextUrl : foundPlanet;
  }
}

export default StarWarsAPI;
