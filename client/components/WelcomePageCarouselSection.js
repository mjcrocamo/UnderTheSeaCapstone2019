/**
 * The Under the Sea Welcome Page Carousel Section Component
 * Shows users the overview of the main
 * content of the site in a Carousel
 *
 * Digital Media Design - Software Engineering Capstone 2019
 * Under the Sea: An interactive guide to our worlds oceans
 * @author Maggie Crocamo
 * {mjcrocamo@gmail.com, mjc494@g.harvard.edu}
 **/

import React, { Fragment, lazy, Suspense } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { useQuery } from '@apollo/react-hooks';
import {
  SEA_ANIMAL_CAROUSEL_IMAGE_HEIGHT,
  SEA_ANIMAL_CAROUSEL_IMAGE_WIDTH,
  GLOBAL_FONT_VARIANT,
  ROUTES
} from './UnderTheSeaConstants';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { WelcomePageCarouselPhotoPlaceholder } from './UnderTheSeaPlaceholders';
import { welcomePageQuery } from './UnderTheSeaQueries';
import { importAllFiles } from './UnderTheSeaUtils';
import { useWelcomePageCarouselStyles } from './UnderTheSeaStyles';

const CardMedia = lazy(() => import('@material-ui/core/CardMedia'));

const images = importAllFiles(
  require.context(
    './images/seaAnimalMainPage',
    false,
    /\.(png|jpe?g|svg)$/,
    'lazy'
  )
);

/**
 * Welcome Page Carousel Section Component
 */
const WelcomePageCarouselSection = () => {
  const classes = useWelcomePageCarouselStyles();
  const { loading, error, data } = useQuery(welcomePageQuery);

  return (
    <Fragment>
      {loading ? (
        <WelcomePageCarouselPhotoPlaceholder />
      ) : (
        <Carousel>
          {data?.seaAnimals?.map(({ id, mainImage, name, binomialName }) => (
            <Carousel.Item key={id}>
              <RouterLink to={ROUTES.SEA_ANIMALS}>
                <Suspense fallback={<WelcomePageCarouselPhotoPlaceholder />}>
                  <CardMedia
                    component="img"
                    alt={mainImage?.alt}
                    height={SEA_ANIMAL_CAROUSEL_IMAGE_HEIGHT}
                    width={SEA_ANIMAL_CAROUSEL_IMAGE_WIDTH}
                    image={mainImage?.url}
                    title={name}
                  />
                </Suspense>
                <Carousel.Caption>
                  <h3>{name}</h3>
                  <p>{binomialName}</p>
                </Carousel.Caption>
              </RouterLink>
            </Carousel.Item>
          ))}
          <Carousel.Item>
            <RouterLink to={ROUTES.OCEAN_CONSERVATION}>
              <Suspense fallback={<WelcomePageCarouselPhotoPlaceholder />}>
                <CardMedia
                  component="img"
                  alt="Ocean Conservation"
                  height={SEA_ANIMAL_CAROUSEL_IMAGE_HEIGHT}
                  width={SEA_ANIMAL_CAROUSEL_IMAGE_WIDTH}
                  image="underWater.jpg"
                  title="Ocean Conservation"
                />
              </Suspense>
              <Carousel.Caption>
                <h3>Ocean Conservation</h3>
                <p>Click to learn how you can make a difference</p>
              </Carousel.Caption>
            </RouterLink>
          </Carousel.Item>
        </Carousel>
      )}
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
    </Fragment>
  );
};

export default WelcomePageCarouselSection;
