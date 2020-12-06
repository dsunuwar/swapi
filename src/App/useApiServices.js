/* eslint-disable no-console */
import * as axios from 'axios';
import { useDispatch } from 'react-redux';

import {
  loadingPeople, setPeople, loadingFilms, setFilms,
} from '../redux/actions';

export default function useApiServices() {
  const dispatch = useDispatch();

  const getPeople = (options) => {
    const baseUrl = 'https://swapi.dev/api/';
    let peopleApi = `${baseUrl}people/`;

    if (options?.page) {
      peopleApi = `${peopleApi}?${options.page}`;
    }

    return axios
      .get(peopleApi)
      .then((response) => response.data);
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

  const getFilms = (filmUrls) => {
    const filmPromises = filmUrls.map((url) => getFilm(url));
    return Promise
      .all(filmPromises)
      .then((films) => films);
  };

  const getCharacters = (options) => (
    dispatch(() => {
      dispatch(loadingPeople(true));
      return getPeople(options)
        .then((peopleData) => dispatch(setPeople(peopleData)))
        .catch((error) => {
          // TODO:
          // dispatch errorAction for ui component to show
          console.log(error);
        })
        .finally(() => dispatch(loadingPeople(false)));
    })
  );

  const getCharacterFilms = (urls) => (
    dispatch(() => {
      dispatch(loadingFilms(true));
      return getFilms(urls)
        .then((filmsData) => dispatch(setFilms(filmsData)))
        .catch((error) => {
          // TODO:
          // dispatch errorAction for ui component to show
          console.log(error);
        })
        .finally(() => dispatch(loadingFilms(false)));
    })
  );

  return {
    getCharacters,
    getCharacterFilms,
  };
}
