import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Carousel from '../../components/Carousel';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const styles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '100%',
  },
  special: {
    padding: theme.spacing(1)
  },
  specialGrid: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(1)
  },
  specialContent: {

  },
  specialHeader: {
    textAlign: 'center',
  }
}));

const promos = [
  {
    title: "Today Special",
    sub: "Power Brush B1G1",
    img: "/static/images/hp1.png",
  },
  {
    title: "Limited Offer",
    sub: "Mannings Crazy!",
    img: "/static/images/hp2.png",
  },
  {
    title: "Only For You",
    sub: "Wat Member only",
    img: "/static/images/hp3.png",
  },
  {
    title: "Festive Hot",
    sub: "After Mooncake?",
    img: "/static/images/hp4.png",
  },
  {
    title: "Summer Special",
    sub: "Hokkaido Snacks",
    img: "/static/images/hp5.png",
  },
  {
    title: "Big Clearance",
    sub: "Last 3 days",
    img: "/static/images/hp6.png",
  },
]

const LinteItemsTable = () => {
  const classes = styles();

  return (
    <Grid container align-content-xs-center={'true'}>
      <Carousel/>
      <Grid container justify="space-around" spacing={2} className={classes.specialGrid}>
        {
          promos.map((promo, i) => (
            <Grid item xs={6} className={classes.special} key={i}>
              <Card variant="outlined">
                <CardMedia
                  className={classes.media}
                  image={promo.img}
                  title={promo.title}
                />
                <CardContent className={classes.specialContent}>
                  <Typography>
                    {promo.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {promo.sub}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        }
      </Grid>

    </Grid>
  );
}


const mapStateToProps = (state, ownProps) => {
  return {
    data: state.upload.lineItems,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(LinteItemsTable));