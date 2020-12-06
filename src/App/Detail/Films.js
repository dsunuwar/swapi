/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import MovieIcon from '@material-ui/icons/Movie';
import {
  Box,
  Typography,
  List, ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

import useApiServices from '../useApiServices';

import Loading from '../Loading';
import { filmSelector } from '../../redux/selectors';

const Films = ({ filmUrls }) => {
  const { getCharacterFilms } = useApiServices();
  const { films, loadingFilms } = useSelector((state) => filmSelector(state));

  const releaseYear = (date) => {
    const swapiDate = new Date(date);
    return swapiDate.getFullYear();
  };

  useEffect(() => {
    getCharacterFilms(filmUrls);

  // eslint-disable-next-line react-hooks/exhaustive-deps
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
