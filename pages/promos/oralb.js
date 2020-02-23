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
      <Grid xs={12} item className={classes.cat}>
        <Link href="https://www.wellcome.com.hk/wd2shop/zh/html/shop/detail.html?bj_pdt_id=104212">
          <img src="/static/images/oralb.png" className={classes.catImg} />
        </Link>
      </Grid>
      <Grid container direction={'row'} align-content-xs-between={'true'}	>
        <Grid xs={6} item className={classes.catBtn}>
          <Link href="https://www.facebook.com/manningshongkong/">
            <img src="/static/images/mannings logo.png" className={classes.catImg} />
          </Link>
        </Grid>
        <Grid xs={6} item className={classes.catBtn}>
          <Link href="https://marketplacebyjasons.com/mpj2shop/en/html/shop/detail.html?bj_pdt_id=310473">
            <img src="/static/images/mpj logo.png" className={classes.catImg} />
          </Link>
        </Grid>
        <Grid xs={6} item className={classes.catBtn}>
          <Link href="https://www.watsons.com.hk/product-oral-b/ob-pro-2500-power-brush-%28black%29/p/BP_254626">
            <img src="/static/images/watsons logo.png" className={classes.catImg} />
          </Link>
        </Grid>
        <Grid xs={6} item className={classes.catBtn}>
          <Link href="https://www.parknshop.com/zh-hk/oral-b-pro-p2000-powerbrush/p/BP_271974">
            <img src="/static/images/pns logo.png" className={classes.catImg} />
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
