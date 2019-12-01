/**
 * Error Boundary Component
 * Used to catch application errors
 * and render an error page that's friendly to the user
 *
 * Digital Media Design - Software Engineering Capstone 2019
 * Under the Sea: An interactive guide to our worlds oceans
 * @author Maggie Crocamo
 * {mjcrocamo@gmail.com, mjc494@g.harvard.edu}
 **/

import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { importAllFiles } from './UnderTheSeaUtils';
import { useErrorBoundaryStyles } from './UnderTheSeaStyles';
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
 * Error Boundary Info Component
 */
const ErrorBoundaryInfo = () => {
  const classes = useErrorBoundaryStyles();
  return (
    <div className="background">
      <Container className={classes.container}>
        <div className={classes.root}>
          <Typography
            gutterBottom
            variant={GLOBAL_FONT_VARIANT}
            color="textPrimary"
            component="h2"
            className={classes.title}
          >
            Oops! Something went wrong!
          </Typography>
          <Typography className={classes.subTextMargin} component="div">
            <Box fontSize={SUBTITLE} className={classes.subText}>
              We're Sorry! We're currently experiencing some technical issues.
            </Box>
          </Typography>
          <CardMedia
            component="img"
            alt="Page Not Loading"
            height={IMAGE_NOT_FOUND_HEIGHT}
            width={IMAGE_NOT_FOUND_WIDTH}
            image={IMAGE_NOT_FOUND}
            title="Page Not Loading"
          />
        </div>
      </Container>
    </div>
  );
};

/**
 * Error Boundary Component
 */
class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <ErrorBoundaryInfo />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
