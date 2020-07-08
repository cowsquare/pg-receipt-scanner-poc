import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@material-ui/core'
import { brandName } from '../../utils/fake'

const useStyles = makeStyles({
  card: {
    borderRadius: '20px',
  },
});

export function CatProductCard(props) {
  const classes = useStyles();
  const brands = Object.keys(props.data).map(brandName)
  const cheapestPrice = Object.entries(props.data).reduce((cur, [key, value]) => {
    if (value.Price < cur) {
      return value.Price
    } else {
      return cur
    }
  }, Number.POSITIVE_INFINITY)

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <Grid container>
          <Grid xs={3} item>
            <Box ml="16px" display="flex" alignItems="center" height="100%">
              <CardMedia
                component="img"
                alt={props.nameEN}
                image={props.imgUrl}
                title={props.nameEN}
              />
            </Box>
          </Grid>
          <Grid xs={9} item >
            <CardContent style={{ padding: 12 }}>
              <Typography gutterBottom>
                <Box fontWeight="fontWeightBold" component="span">
                  {props.nameEN}
                </Box>
              </Typography>

              <Typography variant="body2" color="textSecondary">
                {props.brandEN}
              </Typography>

              <Typography gutterBottom variant="body2">
                <Box fontWeight="fontWeightBold" component="span">
                  {brands.join(' | ')}
                </Box>
              </Typography>

              <Typography variant="body2" color="textSecondary" component='div' style={{ display: 'flex', }}  >
                <Box component='span'>
                  {props.lastUpdate}
                </Box>
                <Box fontSize="20px" fontWeight="fontWeightBold" component='span' ml="auto" style={{ color: '#64b5f6' }}>
                  ${cheapestPrice}
                </Box>
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
}

