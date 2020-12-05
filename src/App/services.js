/* eslint-disable no-console */
import * as axios from 'axios';

export const getPeople = (options) => {
  const baseUrl = 'https://swapi.dev/api/';
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

const getFilm = (url) => (
  axios
    .get(url)
    .then((res) => ({
      title: res.data.title,
      releaseDate: res.data.release_date,
      director: res.data.director,
    }))
);

export const getFilms = (filmUrls) => {
  const filmPromises = filmUrls.map((url) => getFilm(url));
  return Promise.all(filmPromises)
    .then((films) => films)
    .catch((error) => {
      console.log(error);
    });
};
