const initialState = {
  people: {
    previous: undefined,
    next: undefined,
    results: [],
  },
  films: [],
  ui: {
    errorLoadingPeople: undefined,
    errorLoadingFilms: undefined,
    selectedCharacter: undefined,
    loadingPeople: false,
    loadingFilms: false,
  },
};

export default initialState;
