import axios from 'axios';

axios.defaults.baseURL = 'https://swapi.dev/api/';

export const fetchFilmsList = async () => {
  try {
    const films = await axios.get('films/');
    return films;
  } catch (error) {
    console.log(error);
  }
};

export const fetchFilmDetail = async id => {
  try {
    const film = await axios.get(`films/${id}`);
    return film;
  } catch (error) {
    console.log(error);
  }
};

export const fetchPlanetDetail = async id => {
  try {
    const planet = await axios.get(`planets/${id}`);
    return planet;
  } catch (error) {
    console.log(error);
  }
};

export const fetchStarshipDetail = async id => {
  try {
    const starship = await axios.get(`starships/${id}`);
    return starship;
  } catch (error) {
    console.log(error);
  }
};
