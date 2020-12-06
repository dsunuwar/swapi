/* eslint-disable no-console */
import * as axios from 'axios';
import { useDispatch } from 'react-redux';

import { setPeople, loadingPeople } from '../redux/actions';

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

  const getFilms = (filmUrls) => {
    const filmPromises = filmUrls.map((url) => getFilm(url));
    return Promise.all(filmPromises)
      .then((films) => films)
      .catch((error) => {
        console.log(error);
      });
  };

  // ---- Action creators

  const getPeopleAction = (options) => (
    dispatch(() => {
      dispatch(loadingPeople(true));
      return getPeople(options)
        .then((peopleData) => {
          dispatch(setPeople(peopleData));
          dispatch(loadingPeople(false));
        });
    })
  );

  return {
    getPeopleAction,
    getFilms,
  };
}
