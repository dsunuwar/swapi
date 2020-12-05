/* eslint-disable react/prop-types */
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
  table: {
    minWidth: 568,
  },
});

const PeopleList = ({ characters, onRowSelect }) => {
  const classes = useStyles();

  const handleRowSelection = (e, rowItem) => {
    onRowSelect(rowItem);
  };

  return (
    <Table className={classes.table} size="small" aria-label="Star people">
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell align="right">Height&nbsp;(cm)</TableCell>
          <TableCell align="right">Mass&nbsp;(kg)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {characters.map((character) => (
          <TableRow
            key={character.name}
            hover
            selected={false}
            onClick={(e) => handleRowSelection(e, character)}
          >
            <TableCell component="th" scope="row" data-testid="character-name">
              {character.name}
            </TableCell>
            <TableCell align="right">{character.height}</TableCell>
            <TableCell align="right">{character.mass}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default PeopleList;
