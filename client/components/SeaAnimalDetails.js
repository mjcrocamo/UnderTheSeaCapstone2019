/**
 * Sea Animal Details Component
 * Details visible in the sea animal details drawer
 *
 * Digital Media Design - Software Engineering Capstone 2019
 * Under the Sea: An interactive guide to our worlds oceans
 * @author Maggie Crocamo
 * {mjcrocamo@gmail.com, mjc494@g.harvard.edu}
 **/
import React, { Fragment, lazy, Suspense } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import { useSeaAnimalDetailsStyles } from './UnderTheSeaStyles';
import {
  SEA_ANIMAL_DETAILS_IMAGE_HEIGHT,
  SEA_ANIMAL_DETAILS_SEAHORSE_IMAGE_HEIGHT,
  UNDER_THE_SEA_FONT_SIZES,
  GLOBAL_FONT_VARIANT
} from './UnderTheSeaConstants';
import { DetailsPlaceholder } from './UnderTheSeaPlaceholders';

const CardMedia = lazy(() => import('@material-ui/core/CardMedia'));

const {
  DETAILS_DRAWER_LABEL,
  SEA_ANIMAL_SUBTITLE,
  DETAILS_DRAWER_CONTENT,
  DETAILS_DRAWER_LEARN_MORE,
  SEA_ANIMAL_DRAWER_TITLE
} = UNDER_THE_SEA_FONT_SIZES;

const getSeaAnimalSize = (
  minSizeFeet,
  maxSizeFeet,
  minSizeInches,
  maxSizeInches
) => {
  if (minSizeFeet && maxSizeFeet) {
    if (minSizeFeet !== maxSizeFeet) {
      return `${minSizeFeet} to ${maxSizeFeet} feet`;
    }
    return `Up to ${maxSizeFeet} feet`;
  } else if (minSizeInches && maxSizeInches) {
    if (minSizeInches !== maxSizeInches) {
      return `${minSizeInches} to ${maxSizeInches} inches`;
    }
    return `Up to ${maxSizeInches} inches`;
  } else {
    return 'Unknown';
  }
};

const getSeaAnimalWeight = (minWeightlbs, maxWeightlbs) => {
  if (minWeightlbs && maxWeightlbs) {
    if (minWeightlbs !== maxWeightlbs) {
      return `${minWeightlbs} to ${maxWeightlbs} pounds`;
    }
    return `Up to ${maxWeightlbs} pounds`;
  }
  return 'Unknown';
};

/**
 * SeaAnimalDetails Component
 *
 * @param {*} loading
 * @param {*} seaAnimal
 * @param {*} mainImage
 * @param {*} name
 * @param {*} binomialName
 * @param {*} handleDrawerClose
 */
const SeaAnimalDetails = ({
  loading,
  seaAnimal,
  mainImage,
  name,
  binomialName,
  handleDrawerClose
}) => {
  const {
    minSizeInches,
    maxSizeInches,
    minSizeFeet,
    maxSizeFeet,
    minWeightlbs,
    maxWeightlbs,
    animalClass,
    descriptions,
    videos,
    diet,
    links,
    averageLifeSpan
  } = seaAnimal || {};
  const classes = useSeaAnimalDetailsStyles();
  const shouldShowVideo = () => {
    return videos && videos[0] && videos[0].url;
  };
  return (
    <Fragment>
      <div className={classes.drawerCard}>
        <Suspense fallback={null}>
          <CardMedia
            component="img"
            alt={mainImage?.alt}
            height={
              name === 'Seahorse'
                ? SEA_ANIMAL_DETAILS_SEAHORSE_IMAGE_HEIGHT
                : SEA_ANIMAL_DETAILS_IMAGE_HEIGHT
            }
            image={mainImage?.url}
            title={name}
          />
        </Suspense>
        <CloseIcon
          className="CardImageDetails-closeIcon"
          fontSize="large"
          onClick={handleDrawerClose}
        />
        <Box m={3}>
          <Typography gutterBottom variant={GLOBAL_FONT_VARIANT}>
            <Box fontSize={SEA_ANIMAL_DRAWER_TITLE}>{name}</Box>
          </Typography>
          <Typography
            gutterBottom
            variant="body1"
            color="textSecondary"
            component="div"
          >
            <Box
              fontWeight="fontWeightRegular"
              fontStyle="oblique"
              fontSize={SEA_ANIMAL_SUBTITLE}
            >
              {binomialName}
            </Box>
          </Typography>
          <Typography variant="body1" component="div">
            <Box fontSize={18}>
              Information provided by:
              {links?.map(({ id, url, name }, index) => {
                if (index !== links.length - 1) {
                  return (
                    <Link
                      className={classes.link}
                      key={id}
                      rel="noopener"
                      rel="noreferrer"
                      href={url}
                    >
                      {' '}
                      {name},
                    </Link>
                  );
                } else {
                  return (
                    <Link
                      key={id}
                      rel="noopener"
                      className={classes.link}
                      rel="noreferrer"
                      href={url}
                    >
                      {'  '}
                      {name}
                    </Link>
                  );
                }
              })}
            </Box>
          </Typography>
        </Box>
        <Divider />
        <Box m={3}>
          <Typography variant="body1" component="div">
            <Box fontWeight="fontWeightRegular" fontSize={DETAILS_DRAWER_LABEL}>
              <strong>Class:</strong> {animalClass}
            </Box>
            <Box fontWeight="fontWeightRegular" fontSize={DETAILS_DRAWER_LABEL}>
              <strong>Average Life Span:</strong>{' '}
              {averageLifeSpan ? `${averageLifeSpan} years` : 'Unknown'}
            </Box>
            <Box fontWeight="fontWeightRegular" fontSize={DETAILS_DRAWER_LABEL}>
              <strong>Diet:</strong> {diet}
            </Box>
            <Box fontWeight="fontWeightRegular" fontSize={DETAILS_DRAWER_LABEL}>
              <strong>Size:</strong>{' '}
              {getSeaAnimalSize(
                minSizeFeet,
                maxSizeFeet,
                minSizeInches,
                maxSizeInches
              )}
            </Box>
            <Box fontWeight="fontWeightRegular" fontSize={DETAILS_DRAWER_LABEL}>
              <strong>Weight:</strong>{' '}
              {getSeaAnimalWeight(minWeightlbs, maxWeightlbs)}
            </Box>
          </Typography>
        </Box>
        <Divider />
        <Typography gutterBottom component="div">
          <Divider />
          <Box
            fontWeight="fontWeightRegular"
            fontSize={DETAILS_DRAWER_LEARN_MORE}
            m={3}
          >
            Ready to Learn More?
          </Box>
        </Typography>
        {shouldShowVideo() && (
          <Suspense fallback={null}>
            <CardMedia
              component="iframe"
              width="750"
              height="400"
              src={videos[0].url}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Suspense>
        )}
        <Divider />
      </div>
      <div className={classes.list}>
        <List>
          {loading ? (
            <DetailsPlaceholder />
          ) : (
            descriptions?.map(({ id, content }) => (
              <div key={id}>
                <ListItem divider>
                  <Typography component="div">
                    <Box
                      fontWeight="fontWeightRegular"
                      fontSize={DETAILS_DRAWER_CONTENT}
                      m={1}
                    >
                      {content}
                    </Box>
                  </Typography>
                </ListItem>
              </div>
            ))
          )}
        </List>
      </div>
      <Button
        size="large"
        className={classes.link}
        type="button"
        onClick={handleDrawerClose}
      >
        Go Back
      </Button>
    </Fragment>
  );
};

SeaAnimalDetails.propTypes = {
  loading: PropTypes.bool.isRequired,
  seaAnimal: PropTypes.object.isRequired,
  mainImage: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  binomialName: PropTypes.string.isRequired,
  handleDrawerClose: PropTypes.func.isRequired
};

export default SeaAnimalDetails;
