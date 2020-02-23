import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Link from 'next/link';

const useStyles = makeStyles(theme => ({
  catImg: {
    objectFit: 'cover',
    width: '100%',
  },
  title: {
    textDecoration: 'none',
    flexGrow: 1,
  }
}));

function ResponsiveDrawer() {
  const classes = useStyles();

  return (
    <Grid container align-content-xs-space-around={'true'}>
      <Grid container direction={'row'} align-content-xs-between={'true'}	>
        <Grid xs={6} item className={classes.catBtn}>
          <Link href="https://www.facebook.com/manningshongkong/posts/2475378006080001?__tn__=-R">
            <img src="/static/images/Manning page offer.png" className={classes.catImg} />
          </Link>
        </Grid>
        <Grid xs={6} item className={classes.catBtn}>
          <Link href="https://www.facebook.com/manningshongkong/posts/2475378006080001?__tn__=-R">
            <img src="/static/images/Manning page offer2.png" className={classes.catImg} />
          </Link>
        </Grid>
        <Grid xs={6} item className={classes.catBtn}>
          <Link href="https://www.facebook.com/manningshongkong/posts/2475378006080001?__tn__=-R">
            <img src="/static/images/Manning page offer3.png" className={classes.catImg} />
          </Link>
        </Grid>
        <Grid xs={6} item className={classes.catBtn}>
          <Link href="https://www.facebook.com/manningshongkong/posts/2475378006080001?__tn__=-R">
            <img src="/static/images/Manning page offer4.png" className={classes.catImg} />
          </Link>
        </Grid>
        <Grid xs={6} item className={classes.catBtn}>
          <Link href="https://www.facebook.com/manningshongkong/posts/2475378006080001?__tn__=-R">
            <img src="/static/images/Manning page offer5.png" className={classes.catImg} />
          </Link>
        </Grid>
        <Grid xs={6} item className={classes.catBtn}>
          <Link href="https://www.facebook.com/manningshongkong/posts/2475378006080001?__tn__=-R">
            <img src="/static/images/Manning page offer6.png" className={classes.catImg} />
          </Link>
        </Grid>
      </Grid>
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
