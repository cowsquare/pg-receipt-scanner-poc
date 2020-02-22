import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, GridList, GridListTile, GridListTileBar } from '@material-ui/core';

import BottomBar from '../src/components/BottomBar';
import NavBar from '../src/components/NavBar';

import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    marginTop: 60,
    marginBottom: 60,
  },
  gridList: {

  },
  cat: {
    padding: theme.spacing(1)
  },
  title: {
    textDecoration: 'none',
    fontSize: 14,
    height: 'auto',
  },
  subtitle: {
    height: 'auto',
  },
  titleBar: {
    height: 'auto',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  }
}));

const tileData = [
  {
    img: '/static/images/redeem1.png',
    title: '惠康禮劵(HK$50)',
    subtitle: '500 pts'
  },
  {
    img: '/static/images/redeem2.png',
    title: '百佳禮劵(HK$50)',
    subtitle: '500 pts'
  },
  {
    img: '/static/images/redeem3.png',
    title: '萬寧禮劵(HK$50)',
    subtitle: '500 pts'
  },
  {
    img: '/static/images/redeem4.png',
    title: '屈臣氏禮劵(HK$50)',
    subtitle: '500 pts'
  },
  {
    img: '/static/images/redeem5.png',
    title: 'Braun Series 9',
    subtitle: '25000 pts'
  },
  {
    img: '/static/images/redeem6.png',
    title: 'Satin Hair 7 專業SensoDryer',
    subtitle: '15000 pts'
  },
  {
    img: '/static/images/redeem7.png',
    title: 'P2000',
    subtitle: '5000 pts'
  },
  {
    img: '/static/images/redeem8.png',
    title: '1000 miles',
    subtitle: '1000 pts'
  },
  {
    img: '/static/images/redeem9.png',
    title: '5 Stars 2 nights + Meal ',
    subtitle: '10000 pts'
  },
  {
    img: '/static/images/redeem10.png',
    title: '5 stars 2 nights + Meal',
    subtitle: '10000 pts'
  },
]

function ResponsiveDrawer() {
  const classes = useStyles();

  return (
    <Grid container align-content-xs-center={'true'} className={classes.root}>
      <NavBar />
      <GridList className={classes.gridList} cols={2}>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={tile.subtitle}
              classes={{
                root: classes.titleBar,
                title: classes.title,
                subtitle: classes.subtitle,
              }}
            />
          </GridListTile>
        ))}
      </GridList>
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
