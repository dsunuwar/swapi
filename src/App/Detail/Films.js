/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

import MovieIcon from '@material-ui/icons/Movie';
import {
  Box,
  Typography,
  List, ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

import Loading from '../common/Loading';
import { getFilms } from '../services';

const Films = ({ filmUrls }) => {
  const [films, setFilms] = useState([]);
  const [loadingFilms, setLoadingFilms] = useState(false);
  const releaseYear = (date) => {
    const swapiDate = new Date(date);
    return swapiDate.getFullYear();
  };

  useEffect(() => {
    setLoadingFilms(true);
    getFilms(filmUrls)
      .then((resFilms) => {
        setLoadingFilms(false);
        setFilms(resFilms);
      })
      .catch((error) => {
        console.log(error);
        setLoadingFilms(false);
      });
  }, [filmUrls]);

  return (
    <Box mt={1}>
      <Typography variant="body2">List of films:</Typography>
      {loadingFilms && <Loading />}
      {!loadingFilms && (
      <List dense>
        {films.map((film) => (
          <ListItem key={film.title}>
            <ListItemIcon>
              <MovieIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary={`${film.title}, ${film.director}, ${releaseYear(film.releaseDate)}`}
            />
          </ListItem>
        ))}
      </List>
      )}
    </Box>
  );
};

export default Films;
