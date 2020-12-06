import * as constants from './constants';
import initialState from './initialState';

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
        films: action.payload.films,
      };

    case constants.LOADING_FILMS:
      return {
        ...state,
        ui: { ...state.ui, ...action.payload },
      };

    default:
      return state;
  }
};
