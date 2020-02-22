import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import BottomBar from '../src/components/BottomBar';
import NavBar from '../src/components/NavBar';
import ProfileTable from '../src/components/ProfileTable'
import { TextField, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    marginTop: 80,
  },
  space: {
    padding: theme.spacing(1)
  },
  card: {
    margin: theme.spacing(1),
    width: '40%',
    textAlign: 'center'
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  text: {
    width: '100%',
    margin: theme.spacing(3)
  }
}));

function ResponsiveDrawer() {
  const classes = useStyles();

  return (
    <Grid container align-content-xs-center={'true'}>
      <NavBar />
      <Grid container align-content-xs-space-around={'true'} className={classes.root}>
        <Grid
          xs={12}
          justify="center"
          alignItems="center"
          container
          direction="row"
          className={classes.space}
        >
          <Typography variant="h4">
            Leave Feedback
          </Typography>
        </Grid>
        <Grid
          xs={12}
          justify="center"
          alignItems="center"
          container
          className={classes.space}
        >
          <TextField
            id="outlined-multiline-static"
            label="Feedback"
            multiline
            rows="20"
            defaultValue=""
            variant="outlined"
            className={classes.text}
          />
        </Grid>
        <Grid
          xs={12}
          justify="center"
          alignItems="center"
          container
          className={classes.space}
        >
          <Button variant="contained" color="primary" size="large" style={{ width: '50%'}}>
            Send
          </Button>

        </Grid>
      </Grid>
      <BottomBar />
    </Grid>
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
