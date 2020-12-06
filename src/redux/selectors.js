export const peopleSelector = (state) => ({
  loading: state.ui.loadingPeople,
  selectedCharacter: state.ui.selectedCharacter,
  page: {
    previous: state.people.previous,
    next: state.people.next,
  },
  characters: state.people.results,
});

export const filmSelector = (state) => ({
  loadingFilms: state.ui.loadingFilms,
  films: state.films,
});
