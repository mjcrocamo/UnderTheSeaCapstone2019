/**
 * Footer Component
 * Footer which has interesting content at bottom of the page
 *
 * Digital Media Design - Software Engineering Capstone 2019
 * Under the Sea: An interactive guide to our worlds oceans
 * @author Maggie Crocamo
 * {mjcrocamo@gmail.com, mjc494@g.harvard.edu}
 **/

import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { UNDER_THE_SEA_FONT_SIZES } from './UnderTheSeaConstants';
import { makeStyles } from '@material-ui/core/styles';

const { FOOTER } = UNDER_THE_SEA_FONT_SIZES;
const useFooterStyles = makeStyles(theme => ({
  icon: {
    height: 80,
    width: 80,
    color: 'white'
  },
  root: {
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: theme.spacing(2)
  },
  backToTop: {
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: theme.spacing(6)
  },
  copyRight: {
    marginTop: theme.spacing(2)
  }
}));

/**
 * Function when called, scrolls to the top of the page
 */
const scrollToTop = () => window.scrollTo(0, 0);

/**
 * Footer Component
 */
const Footer = () => {
  const classes = useFooterStyles();
  return (
    <Fragment>
      <div className={classes.backToTop}>
        <Button color="inherit" onClick={scrollToTop}>
          <Typography color="textPrimary" component="div">
            <Box fontSize={20}>Back to Top</Box>
          </Typography>
        </Button>
      </div>
      <div className={classes.root}>
        <Link rel="noopener" rel="noreferrer" href="https://twitter.com/">
          <TwitterIcon className={classes.icon} />
        </Link>
        <Link rel="noopener" rel="noreferrer" href="https://www.instagram.com/">
          <InstagramIcon className={classes.icon} />
        </Link>
        <Link rel="noopener" rel="noreferrer" href="https://www.facebook.com/">
          <FacebookIcon className={classes.icon} />
        </Link>
        <div className={classes.copyRight}>
          <Typography color="textPrimary" component="div">
            <Box>
              @copyright 2019
              <br />
              Under the Sea: An Interactive Guide to Our World's Oceans
              <br />
              Author: Maggie Crocamo
            </Box>
          </Typography>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
