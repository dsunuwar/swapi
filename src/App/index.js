/* eslint-disable import/no-named-as-default-member */
/* eslint-disable no-console */
import './App.css';

import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
  Container, TableContainer, Typography,
} from '@material-ui/core';

import useApiServices from './useApiServices';

import Loading from './common/Loading';
import People from './People';
import Detail from './Detail';
import Pagination from './Pagination';
import { peopleSelector } from '../redux/selectors';
import { setSelectedPeople } from '../redux/actions';

const App = () => {
  const dispatch = useDispatch();
  const { getPeopleAction } = useApiServices();
  const {
    characters, page, loading, selectedCharacter,
  } = useSelector((state) => peopleSelector(state));

  const pageChange = (url) => {
    getPeopleAction({ page: url.split('?')[1] });
    dispatch(setSelectedPeople(undefined));
  };

  useEffect(() => {
    getPeopleAction();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
