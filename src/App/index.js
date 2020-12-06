/* eslint-disable no-console */
import './App.css';

import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import {
  Container, TableContainer, Typography,
} from '@material-ui/core';

import { getPeople } from './services';

import Loading from './common/Loading';
import People from './People';
import Detail from './Detail';
import Pagination from './Pagination';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(undefined);
  const [page, setPage] = useState({ previous: null, next: null });

  const starWarsPeople = useSelector((state) => {
    console.log('state', state);
    return state.people;
  });

  const loadPeople = (options) => {
    setLoading(true);
    getPeople(options)
      .then((res) => {
        setLoading(false);
        setCharacters(res.results);
        setSelectedCharacter(undefined);
        setPage({
          previous: res.previous,
          next: res.next,
        });
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const pageChange = (url) => {
    loadPeople({ page: url.split('?')[1] });
  };

  useEffect(() => {
    console.log(starWarsPeople);
    loadPeople();
  }, [starWarsPeople]);

  return (
    <Container classes={{ root: 'App-container' }}>
      <Typography variant="h5">Star Wars People</Typography>
      <TableContainer classes={{ root: 'Table-container' }}>
        {loading && <Loading />}
        {!loading && (
          <People
            characters={characters}
            onRowSelect={setSelectedCharacter}
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
