import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
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
          <Link href="https://www.facebook.com/watsonshongkong/posts/2462799207099020?__xts__[0]=68.ARAp-VnAGOodztlgdl00sc0WQf1PDoHFJG_xVWRSb8zaJxdubCLZXIz7rzWnqREAylv7ia-Kz9s_Cep-e_29hIszGM-TrEfhoGw2iQkMdq7ZgWxA5AzJckEI5ouX72PhB86ggXYU5nKUVIbb3QFwlteRegkdSgH0D6apDEx7U350fy5jVNBjys0984BX6g_nQKFA7tfuGBbjKDn8FRSdogtRmdZmuRCJGqwQY8L_VHtYy5t6I2eHyfcXgEtEYClxhyjfPPBBCnbIBrQBrDH4dADJ_MpROFV4TWOCl48Ou-JvtnH5dNRYpCGl07zF9LoNVbOuRc3EIlne0XeqU00QbrW87r-a6F2NRw&__tn__=-R">
            <img src="/static/images/Watsons page offer.png" className={classes.catImg} />
          </Link>
        </Grid>
        <Grid xs={6} item className={classes.catBtn}>
          <Link href="https://www.facebook.com/watsonshongkong/posts/2462799207099020?__xts__[0]=68.ARAp-VnAGOodztlgdl00sc0WQf1PDoHFJG_xVWRSb8zaJxdubCLZXIz7rzWnqREAylv7ia-Kz9s_Cep-e_29hIszGM-TrEfhoGw2iQkMdq7ZgWxA5AzJckEI5ouX72PhB86ggXYU5nKUVIbb3QFwlteRegkdSgH0D6apDEx7U350fy5jVNBjys0984BX6g_nQKFA7tfuGBbjKDn8FRSdogtRmdZmuRCJGqwQY8L_VHtYy5t6I2eHyfcXgEtEYClxhyjfPPBBCnbIBrQBrDH4dADJ_MpROFV4TWOCl48Ou-JvtnH5dNRYpCGl07zF9LoNVbOuRc3EIlne0XeqU00QbrW87r-a6F2NRw&__tn__=-R">
            <img src="/static/images/Watsons page offer2.png" className={classes.catImg} />
          </Link>
        </Grid>
        <Grid xs={6} item className={classes.catBtn}>
          <Link href="https://www.facebook.com/watsonshongkong/posts/2462799207099020?__xts__[0]=68.ARAp-VnAGOodztlgdl00sc0WQf1PDoHFJG_xVWRSb8zaJxdubCLZXIz7rzWnqREAylv7ia-Kz9s_Cep-e_29hIszGM-TrEfhoGw2iQkMdq7ZgWxA5AzJckEI5ouX72PhB86ggXYU5nKUVIbb3QFwlteRegkdSgH0D6apDEx7U350fy5jVNBjys0984BX6g_nQKFA7tfuGBbjKDn8FRSdogtRmdZmuRCJGqwQY8L_VHtYy5t6I2eHyfcXgEtEYClxhyjfPPBBCnbIBrQBrDH4dADJ_MpROFV4TWOCl48Ou-JvtnH5dNRYpCGl07zF9LoNVbOuRc3EIlne0XeqU00QbrW87r-a6F2NRw&__tn__=-R">
            <img src="/static/images/Watsons page offer3.png" className={classes.catImg} />
          </Link>
        </Grid>
        <Grid xs={6} item className={classes.catBtn}>
          <Link href="https://www.facebook.com/watsonshongkong/posts/2462799207099020?__xts__[0]=68.ARAp-VnAGOodztlgdl00sc0WQf1PDoHFJG_xVWRSb8zaJxdubCLZXIz7rzWnqREAylv7ia-Kz9s_Cep-e_29hIszGM-TrEfhoGw2iQkMdq7ZgWxA5AzJckEI5ouX72PhB86ggXYU5nKUVIbb3QFwlteRegkdSgH0D6apDEx7U350fy5jVNBjys0984BX6g_nQKFA7tfuGBbjKDn8FRSdogtRmdZmuRCJGqwQY8L_VHtYy5t6I2eHyfcXgEtEYClxhyjfPPBBCnbIBrQBrDH4dADJ_MpROFV4TWOCl48Ou-JvtnH5dNRYpCGl07zF9LoNVbOuRc3EIlne0XeqU00QbrW87r-a6F2NRw&__tn__=-R">
            <img src="/static/images/Watsons page offer4.png" className={classes.catImg} />
          </Link>
        </Grid>
        <Grid xs={6} item className={classes.catBtn}>
          <Link href="https://www.facebook.com/watsonshongkong/posts/2462799207099020?__xts__[0]=68.ARAp-VnAGOodztlgdl00sc0WQf1PDoHFJG_xVWRSb8zaJxdubCLZXIz7rzWnqREAylv7ia-Kz9s_Cep-e_29hIszGM-TrEfhoGw2iQkMdq7ZgWxA5AzJckEI5ouX72PhB86ggXYU5nKUVIbb3QFwlteRegkdSgH0D6apDEx7U350fy5jVNBjys0984BX6g_nQKFA7tfuGBbjKDn8FRSdogtRmdZmuRCJGqwQY8L_VHtYy5t6I2eHyfcXgEtEYClxhyjfPPBBCnbIBrQBrDH4dADJ_MpROFV4TWOCl48Ou-JvtnH5dNRYpCGl07zF9LoNVbOuRc3EIlne0XeqU00QbrW87r-a6F2NRw&__tn__=-R">
            <img src="/static/images/Watsons page offer5.png" className={classes.catImg} />
          </Link>
        </Grid>
        <Grid xs={6} item className={classes.catBtn}>
          <Link href="https://www.facebook.com/watsonshongkong/posts/2462799207099020?__xts__[0]=68.ARAp-VnAGOodztlgdl00sc0WQf1PDoHFJG_xVWRSb8zaJxdubCLZXIz7rzWnqREAylv7ia-Kz9s_Cep-e_29hIszGM-TrEfhoGw2iQkMdq7ZgWxA5AzJckEI5ouX72PhB86ggXYU5nKUVIbb3QFwlteRegkdSgH0D6apDEx7U350fy5jVNBjys0984BX6g_nQKFA7tfuGBbjKDn8FRSdogtRmdZmuRCJGqwQY8L_VHtYy5t6I2eHyfcXgEtEYClxhyjfPPBBCnbIBrQBrDH4dADJ_MpROFV4TWOCl48Ou-JvtnH5dNRYpCGl07zF9LoNVbOuRc3EIlne0XeqU00QbrW87r-a6F2NRw&__tn__=-R">
            <img src="/static/images/Watsons page offer6.png" className={classes.catImg} />
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
