import React from 'react';
import {useStyles, withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';


const styles = (theme) => ({
  table: {
    padding: theme.spacing(1)
  },
});

function createData(name, data) {
  return { name, data };
}

const rows = [
  createData('User ID', '0001'),
  createData('Email', 'norris_fung@pg.com'),
  createData('Region', 'Wan Chai'),
  createData('Family Member', '4'),
];

function DenseTable({ classes }) {
  const [state, setState] = React.useState({
    switch: true,
  });

  const handleChange = event => {
    setState({ ...state, switch: event.target.checked });
  };

  return (
    <TableContainer className={classes.table}>
      <Table>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.data}</TableCell>
            </TableRow>
          ))}
          <TableRow key={"smart"}>
            <TableCell component="th" scope="row">
              Smart Reminder
            </TableCell>
            <TableCell align="right">
              <Switch
                checked={state.switch}
                onChange={handleChange}
                color="primary"
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default withStyles(styles, { withTheme: true })(DenseTable)