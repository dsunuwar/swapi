import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const PeopleList = ({ characters, onRowSelect }) => {
  const classes = useStyles();

  const handleRowSelection = (e, rowItem) => {
    onRowSelect(rowItem);
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Height&nbsp;(cms)</TableCell>
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
              <TableCell component="th" scope="row">
                {character.name}
              </TableCell>
              <TableCell align="right">{character.height}</TableCell>
              <TableCell align="right">{character.mass}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PeopleList;
