import * as constants from './constants';

export const setPeople = (people) => ({
  type: constants.SET_PEOPLE,
  payload: {
    people,
  },
});

export const setFilm = (films) => ({
  type: constants.SET_FILM,
  payload: {
    films,
  },
});
