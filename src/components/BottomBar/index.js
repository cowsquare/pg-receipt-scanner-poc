import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  BottomNavigationAction,
  BottomNavigation,
  Link
} from '@material-ui/core';

import { Home } from '@material-ui/icons';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import RedeemIcon from '@material-ui/icons/Redeem';
import UploadButton from '../UploadButton';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <Link href="/shop">
        <BottomNavigationAction showLabel={true} label="Shop" icon={<ShoppingCartIcon />} />
      </Link>
      <Link href="/">
        <BottomNavigationAction showLabel={true} label="Home" icon={<Home />} />
      </Link>
      <Link href="/shop">
        <BottomNavigationAction showLabel={true} label="Receipt Scanner" icon={<UploadButton />} />
      </Link>
      <Link href="/redeem">
        <BottomNavigationAction showLabel={true} label="Coupons" icon={<RedeemIcon />} />
      </Link>
    </BottomNavigation>
  );
}