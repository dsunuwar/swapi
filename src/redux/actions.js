import * as constants from './constants';

export const setPeople = (people) => ({
  type: constants.SET_PEOPLE,
  payload: {
    people,
  },
});

export const setSelectedPeople = (selectedCharacter) => ({
  type: constants.SET_SELECTED_PEOPLE,
  payload: {
    selectedCharacter,
  },
});

export const loadingPeople = (loading) => ({
  type: constants.LOADING_PEOPLE,
  payload: {
    loadingPeople: loading,
  },
});

export const loadingFilms = (loading) => ({
  type: constants.LOADING_FILMS,
  payload: {
    loadingFilms: loading,
  },
});

export const setFilms = (films) => ({
  type: constants.SET_FILM,
  payload: {
    films,
  },
});
