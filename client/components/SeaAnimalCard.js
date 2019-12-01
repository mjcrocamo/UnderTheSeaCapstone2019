/**
 * Sea Animal Card Component
 * Shows basic information about an Ocean Animal
 *
 * Digital Media Design - Software Engineering Capstone 2019
 * Under the Sea: An interactive guide to our worlds oceans
 * @author Maggie Crocamo
 * {mjcrocamo@gmail.com, mjc494@g.harvard.edu}
 **/

import React, { useState, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Placeholder } from 'semantic-ui-react';
import { importAllFiles } from './UnderTheSeaUtils';
import { useSeaAnimalCardStyles } from './UnderTheSeaStyles';
import SeaAnimalDrawerContainer from './SeaAnimalDrawerContainer';
import {
  SEA_ANIMAL_CARD_IMAGE_HEIGHT,
  SEA_ANIMAL_CARD_IMAGE_WIDTH,
  UNDER_THE_SEA_FONT_SIZES,
  GLOBAL_FONT_VARIANT
} from './UnderTheSeaConstants';

const CardMedia = lazy(() => import('@material-ui/core/CardMedia'));

const images = importAllFiles(
  require.context(
    './images/seaAnimalMainPage',
    false,
    /\.(png|jpe?g|svg)$/,
    'lazy'
  )
);

const { SEA_ANIMAL_SUBTITLE, SEA_ANIMAL_CARD_TITLE } = UNDER_THE_SEA_FONT_SIZES;

/**
 * SeaAnimalCard Component
 *
 * @param {*} seaAnimalId
 * @param {*} mainImage
 * @param {*} name
 * @param {*} binomialName
 **/
const SeaAnimalCard = ({ seaAnimalId, mainImage, name, binomialName }) => {
  const classes = useSeaAnimalCardStyles();

  const [state, setState] = useState({
    isOpen: false
  });

  const toggleDrawer = open => event => {
    setState({ ...state, isOpen: open });
  };

  const handleLearnMoreClick = () => {
    setState({
      ...state,
      isOpen: true
    });
  };

  return (
    <Card className={classes.card}>
      <CardActionArea onClick={handleLearnMoreClick}>
        <Suspense
          fallback={
            <Placeholder className={classes.seaAnimalPlaceholder}>
              <Placeholder.Image square />
            </Placeholder>
          }
        >
          <CardMedia
            component="img"
            alt={mainImage?.alt}
            height={SEA_ANIMAL_CARD_IMAGE_HEIGHT}
            width={SEA_ANIMAL_CARD_IMAGE_WIDTH}
            image={mainImage?.url}
            title={name}
          />
        </Suspense>
        <CardContent>
          <Typography
            gutterBottom
            variant={GLOBAL_FONT_VARIANT}
            component="div"
          >
            <Box fontSize={SEA_ANIMAL_CARD_TITLE}>{name}</Box>
          </Typography>
          <Typography variant="body1" color="textSecondary" component="div">
            <Box
              fontWeight="fontWeightRegular"
              fontStyle="oblique"
              fontSize={SEA_ANIMAL_SUBTITLE}
            >
              {binomialName}
            </Box>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="large"
          type="button"
          className={classes.learnMore}
          onClick={handleLearnMoreClick}
        >
          Learn More
        </Button>
        <SeaAnimalDrawerContainer
          isOpen={state.isOpen}
          toggleDrawer={toggleDrawer}
          mainImage={mainImage}
          name={name}
          binomialName={binomialName}
          seaAnimalId={seaAnimalId}
        />
      </CardActions>
    </Card>
  );
};

SeaAnimalCard.propTypes = {
  seaAnimalId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  binomialName: PropTypes.string.isRequired,
  mainImage: PropTypes.object.isRequired
};

export default SeaAnimalCard;
