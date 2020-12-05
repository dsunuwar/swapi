/* eslint-disable no-console */
const axios = require('axios');

const baseUrl = 'https://swapi.dev/api/';

export const getPeople = (options) => {
  let peopleApi = `${baseUrl}people/`;

  if (options?.page) {
    peopleApi = `${peopleApi}?${options.page}`;
  }

  return axios
    .get(peopleApi)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
};

const getFilm = async (url) => axios.get(url).then((res) => ({
  title: res.data.title,
  releaseDate: res.data.release_date,
  director: res.data.director,
}));

export const getFilms = async (filmUrls) => {
  const filmPromises = filmUrls.map((url) => getFilm(url));
  return Promise.all(filmPromises)
    .then((films) => films)
    .catch((error) => {
      console.log(error);
    });
};
