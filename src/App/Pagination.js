/* eslint-disable react/prop-types */
import { Box, Button } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import React from 'react';

const Pagination = ({ page, onPageChange }) => (
  <Box
    className="Pagination-align"
  >
    Pagination:
    <Button
      disabled={!page.previous}
      onClick={() => onPageChange(page?.previous)}
    >
      <ChevronLeftIcon />
      Back
    </Button>
    <Button
      disabled={!page.next}
      onClick={() => onPageChange(page?.next)}
    >
      Next
      <ChevronRightIcon />
    </Button>
  </Box>
);

export default Pagination;
