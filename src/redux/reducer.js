import * as constants from './constants';

const initialState = {
  people: {
    previous: undefined,
    next: undefined,
    results: [],
  },
  films: [],
  ui: {
    selectedCharacter: undefined,
    loadingPeople: false,
    loadingFilms: false,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_PEOPLE:
      return {
        ...state,
        people: action.payload.people,
      };

    case constants.SET_SELECTED_PEOPLE:
      return {
        ...state,
        ui: {
          ...state.ui,
          ...action.payload,
        },
      };

    case constants.LOADING_PEOPLE:
      return {
        ...state,
        ui: { ...state.ui, ...action.payload },
      };

    case constants.SET_FILM:
      return {
        ...state,
        people: action.payload.films,
      };
    default:
      return state;
  }
};
