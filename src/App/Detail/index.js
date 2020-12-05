/* eslint-disable react/prop-types */
import React from 'react';
import { Box, Typography, Divider } from '@material-ui/core';
import Films from './Films';

const Detail = ({ character }) => (
  <Box mt={2}>
    <Divider />
    <Box mt={2}>
      <Typography variant="h5">Detail Section</Typography>
      <Typography variant="body2">
        {`Name: ${character.name}`}
      </Typography>
      <Typography variant="body2">
        {`Birth year: ${character.birth_year}`}
      </Typography>
      <Typography variant="body2">
        {`Gender: ${character.gender}`}
      </Typography>
    </Box>
    <Films filmUrls={character.films} />
  </Box>
);

export default Detail;
