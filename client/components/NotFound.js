/**
 * NotFound Component
 * The component that renders when the route is not found
 *
 * Digital Media Design - Software Engineering Capstone 2019
 * Under the Sea: An interactive guide to our worlds oceans
 * @author Maggie Crocamo
 * {mjcrocamo@gmail.com, mjc494@g.harvard.edu}
 **/

import React from 'react';
import { Typography } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import { useNotFoundStyles } from './UnderTheSeaStyles';
import { importAllFiles } from './UnderTheSeaUtils';
import {
  IMAGE_NOT_FOUND,
  IMAGE_NOT_FOUND_HEIGHT,
  IMAGE_NOT_FOUND_WIDTH,
  GLOBAL_FONT_VARIANT,
  UNDER_THE_SEA_FONT_SIZES
} from './UnderTheSeaConstants';

const images = importAllFiles(
  require.context('./images/NotFound', false, /\.(png|jpe?g|svg)$/, 'lazy')
);

const { SUBTITLE } = UNDER_THE_SEA_FONT_SIZES;

/**
 * NotFound Component
 */
const NotFound = () => {
  const classes = useNotFoundStyles();
  return (
    <div className={classes.root}>
      <Typography
        gutterBottom
        variant={GLOBAL_FONT_VARIANT}
        color="textPrimary"
        component="h2"
      >
        Looking for Something?
      </Typography>
      <Typography className={classes.subTextMargin} component="div">
        <Box fontSize={SUBTITLE} className={classes.subText}>
          We're Sorry! It looks like we can't find what you're looking for.
        </Box>
      </Typography>
      <CardMedia
        component="img"
        alt="Page not Found"
        height={IMAGE_NOT_FOUND_HEIGHT}
        width={IMAGE_NOT_FOUND_WIDTH}
        image={IMAGE_NOT_FOUND}
        title="Page Not Found"
      />
    </div>
  );
};

export default NotFound;
