import React from 'react'
import PropTypes from 'prop-types';

import MetaTable from '../src/containers/MetaDataTable';
import LineItemsTable from '../src/containers/LineItemsTable';
import SummaryTable from '../src/containers/SummaryTable';

import { makeStyles, useTheme } from '@material-ui/core/styles';

import BottomBar from '../src/components/BottomBar';
import NavBar from '../src/components/NavBar';

import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    marginTop: 60,
    marginBottom: 60,
  },
  table: {
    padding: theme.spacing(1)
  }
}));

function ResponsiveDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavBar />
      <Grid container>
        <Grid xs={12} className={classes.table}>
          <MetaTable />
        </Grid>
        <Grid xs={12} className={classes.table}>
          <SummaryTable />
        </Grid>
        <Grid xs={12} className={classes.table}>
          <LineItemsTable />
        </Grid>
      </Grid>
      <BottomBar />
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.any,
};

export default ResponsiveDrawer;
