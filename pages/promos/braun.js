import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Link from '@material-ui/core/Link';

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
      <Grid xs={12} item className={classes.cat}>
        <Link href="https://www.facebook.com/notes/market-place-by-jasons/%E6%A2%9D%E6%AC%BE%E5%8F%8A%E7%B4%B0%E5%89%87/10157229681193617/">
          <img src="/static/images/event%20page.png" className={classes.catImg} />
        </Link>
      </Grid>
      <Grid xs={12} item className={classes.cat}>
        <Link href="https://www.facebook.com/notes/market-place-by-jasons/%E6%A2%9D%E6%AC%BE%E5%8F%8A%E7%B4%B0%E5%89%87/10157229681193617/">
          <img src="/static/images/event%20page1.png" className={classes.catImg} />
        </Link>
      </Grid>
      <Grid xs={12} item className={classes.cat}>
        <Link href="https://www.facebook.com/notes/market-place-by-jasons/%E6%A2%9D%E6%AC%BE%E5%8F%8A%E7%B4%B0%E5%89%87/10157229681193617/">
          <img src="/static/images/event%20page2.png" className={classes.catImg} />
        </Link>
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
