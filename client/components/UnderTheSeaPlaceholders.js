/**
 * The Under the Sea Placeholder Components
 * Used as placeholders while data/ components areloading
 *
 * Digital Media Design - Software Engineering Capstone 2019
 * Under the Sea: An interactive guide to our worlds oceans
 * @author Maggie Crocamo
 * {mjcrocamo@gmail.com, mjc494@g.harvard.edu}
 **/

import React, { Fragment } from 'react';
import { Placeholder } from 'semantic-ui-react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import {
  GLOBAL_FONT_VARIANT,
  UNDER_THE_SEA_FONT_SIZES
} from './UnderTheSeaConstants';
import { usePlaceholderStyles } from './UnderTheSeaStyles';

const seaAnimalLoadingList = [[], [], [], [], [], [], [], [], []];
const oceanConservationList = [[], [], [], [], []];
const welcomeTopicsList = [[], [], [], []];
const detailsList = [[], [], []];
const sourcesList = [[], [], []];

const { SUBTITLE } = UNDER_THE_SEA_FONT_SIZES;

/**
 * Sea Animal Layout Placeholder
 */
export const SeaAnimalPageLayoutPlaceholder = () => {
  const classes = usePlaceholderStyles();
  return (
    <Grid container spacing={2}>
      {seaAnimalLoadingList.map((card, index) => (
        <Grid item key={index}>
          <Card>
            <Placeholder className={classes.seaAnimalPlaceholder}>
              <Placeholder.Image square />
            </Placeholder>
            <CardContent>
              <div className={classes.seaAnimal}></div>
            </CardContent>
            <CardContent>
              <Button disabled>Learn More</Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

/**
 * Welcome Page Carousel Photo Placeholder
 */
export const WelcomePageCarouselPhotoPlaceholder = () => {
  const classes = usePlaceholderStyles();
  return (
    <Placeholder className={classes.carouselPlaceholder} fluid>
      <Placeholder.Image />
    </Placeholder>
  );
};

/**
 * Ocean Conservation Placeholder
 */
export const OceanConservationPlaceholder = () => {
  const classes = usePlaceholderStyles();
  return oceanConservationList.map((card, index) => (
    <Grid item xs={12} key={index}>
      <Card className={classes.card}>
        <div className={classes.cover}>
          <Placeholder className={classes.conservationPlaceholder}>
            <Placeholder.Image />
          </Placeholder>
        </div>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <div></div>
          </CardContent>
        </div>
      </Card>
    </Grid>
  ));
};

/**
 * Lazy Load Ocean Conservation Page Placeholder
 */
export const LazyLoadOceanConservationPlaceholder = () => {
  return (
    <Grid container spacing={3}>
      <OceanConservationPlaceholder />
    </Grid>
  );
};

/**
 * Sea Animal Details Placeholder
 */
export const DetailsPlaceholder = () => {
  return detailsList.map((card, index) => (
    <Placeholder fluid key={index}>
      <Placeholder.Line length="full" />
      <Placeholder.Line length="full" />
      <Placeholder.Line length="full" />
    </Placeholder>
  ));
};

/**
 * Welcome Topics Placeholder
 */
export const WelcomeTopicsPlaceholder = () => {
  const classes = usePlaceholderStyles();
  return welcomeTopicsList.map((card, index) => (
    <Grid item xs={12} sm={6} key={index}>
      <Card className={classes.card}>
        <div className={classes.cover}>
          <Placeholder className={classes.welcomeTopicPlaceholder}>
            <Placeholder.Image />
          </Placeholder>
        </div>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <div></div>
          </CardContent>
        </div>
      </Card>
    </Grid>
  ));
};

/**
 * Lazy Welcome Page Placeholder
 */
export const LazyWelcomePageLayoutPlaceholder = () => {
  const classes = usePlaceholderStyles();
  return (
    <Fragment>
      <WelcomePageCarouselPhotoPlaceholder />
      <div>
        <Paper className={classes.underHero}>
          <Typography
            gutterBottom
            variant={GLOBAL_FONT_VARIANT}
            color="textPrimary"
            component="h2"
          >
            <Box fontWeight="fontWeightRegular">Welcome to Under the Sea!</Box>
          </Typography>
          <Typography component="div">
            <Box fontSize={20}>
              Your one place to learn about ocean animals and conservation.
              Learn about various ocean animals and how you can help with ocean
              conservation efforts.
            </Box>
          </Typography>
        </Paper>
      </div>
      <Typography
        variant={GLOBAL_FONT_VARIANT}
        gutterBottom
        color="textPrimary"
        component="h2"
        className={classes.welcomeTopic}
      >
        Explore Interesting Content
      </Typography>
    </Fragment>
  );
};

/**
 * Lazy Game Page Placeholder
 */
export const LazyGamePagePlaceholder = () => {
  const classes = usePlaceholderStyles();
  return (
    <div className={classes.root}>
      <Typography
        variant={GLOBAL_FONT_VARIANT}
        gutterBottom
        color="textPrimary"
        component="h2"
      >
        <Box fontWeight="fontWeightRegular">The Great Ocean Clean Up</Box>
      </Typography>
      <Typography
        color="textPrimary"
        className={classes.subTextMargin}
        component="div"
      >
        <Box fontSize={SUBTITLE} className={classes.subText}>
          Play as Stevey the penguin, as he explores the ocean floor, cleaning
          up trash and squashing enemies.
        </Box>
      </Typography>
      <Paper className={classes.gamePaper}></Paper>
      <Placeholder className={classes.gamePlaceholder} fluid>
        <Placeholder.Image />
      </Placeholder>
    </div>
  );
};

/**
 * Lazy Sources Placeholder
 */
export const LazySourcesPlaceholder = () => {
  const classes = usePlaceholderStyles();
  return (
    <Fragment>
      <Typography
        variant={GLOBAL_FONT_VARIANT}
        gutterBottom
        color="textPrimary"
        component="h2"
        className={classes.section}
      >
        Sources Cited
      </Typography>
      {sourcesList.map((card, index) => (
        <div className={classes.sources} key={index}>
          {sourcesList.map((card, index) => (
            <Placeholder fluid key={index}>
              <Placeholder.Line length="full" />
              <Placeholder.Line length="full" />
              <Placeholder.Line length="full" />
            </Placeholder>
          ))}
        </div>
      ))}
    </Fragment>
  );
};

/**
 * Sources Placeholder
 */
export const SourcesPlaceholder = () => {
  const classes = usePlaceholderStyles();
  return (
    <div className={classes.sources}>
      {sourcesList.map((card, index) => (
        <Placeholder fluid key={index}>
          <Placeholder.Line length="full" />
          <Placeholder.Line length="full" />
          <Placeholder.Line length="full" />
        </Placeholder>
      ))}
    </div>
  );
};
