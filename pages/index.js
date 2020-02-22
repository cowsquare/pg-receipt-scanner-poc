import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, useTheme } from '@material-ui/core/styles';

import BottomBar from '../src/components/BottomBar';
import NavBar from '../src/components/NavBar';
import HomePage from '../src/containers/HomePage';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    marginTop: 60,
    marginBottom: 60,
  },
}));

function ResponsiveDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavBar />
      <div>
        <HomePage />
      </div>
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
