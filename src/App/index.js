/* eslint-disable import/no-named-as-default-member */
/* eslint-disable no-console */
import './App.css';

import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';
import {
  Container, TableContainer, Typography,
} from '@material-ui/core';

import { getPeople } from './services';
import useApiServices from './useApiServices';

import Loading from './common/Loading';
import People from './People';
import Detail from './Detail';
import Pagination from './Pagination';

const App = () => {
  const { getPeopleAction } = useApiServices();
  // const [loading, setLoading] = useState(false);
  // const [characters, setCharacters] = useState([]);
  // const [selectedCharacter, setSelectedCharacter] = useState(undefined);
  // const [page, setPage] = useState({ previous: null, next: null });

  const {
    characters, page, loading, selectedCharacter,
  } = useSelector(
    (state) => ({
      loading: state.ui.loadingPeople,
      selectedCharacter: state.ui.selectedCharacter,
      page: {
        previous: state.people.previous,
        next: state.people.next,
      },
      characters: state.people.results,
    }),
  );

  const loadPeople = (options) => {
    // setLoading(true);
    getPeople(options)
      .then((res) => {
        console.log(res);
        // setLoading(false);
        // setCharacters(res.results);
        // setSelectedCharacter(undefined);
        // setPage({
        //   previous: res.previous,
        //   next: res.next,
        // });
      })
      .catch((error) => {
        console.log(error);
        // setLoading(false);
      });
  };

  const pageChange = (url) => {
    loadPeople({ page: url.split('?')[1] });
  };

  useEffect(() => {
    getPeopleAction();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   loadPeople();
  // }, []);

  return (
    <Container classes={{ root: 'App-container' }}>
      <Typography variant="h5">Star Wars People</Typography>
      <TableContainer classes={{ root: 'Table-container' }}>
        {loading && <Loading />}
        {!loading && (
          <People
            characters={characters}
          />
        )}
      </TableContainer>
      <Pagination
        page={page}
        onPageChange={pageChange}
      />
      {selectedCharacter && (
        <Detail character={selectedCharacter} />
      )}
    </Container>
  );
};

export default App;
