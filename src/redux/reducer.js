import * as constants from './constants';

const initialState = {
  people: {},
  films: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_PEOPLE:
      return {
        ...state,
        people: action.payload.people,
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
