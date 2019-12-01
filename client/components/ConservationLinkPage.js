/**
 * The Under the Sea Conservation Link Page component
 * Shows a list of ocean conservation organizations
 * with a summary and photo
 *
 * Digital Media Design - Software Engineering Capstone 2019
 * Under the Sea: An interactive guide to our worlds oceans
 * @author Maggie Crocamo
 * {mjcrocamo@gmail.com, mjc494@g.harvard.edu}
 **/

import React, { lazy, Suspense } from 'react';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { Placeholder } from 'semantic-ui-react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import { useQuery } from '@apollo/react-hooks';
import { oceanConservationQuery } from './UnderTheSeaQueries';
import { OceanConservationPlaceholder } from './UnderTheSeaPlaceholders';
import { useConservationLinkStyles } from './UnderTheSeaStyles';
import { importAllFiles } from './UnderTheSeaUtils';
import {
  CONSERVATION_PLACEHOLDER_IMAGE_WIDTH,
  CONSERVATION_IMAGE_HEIGHT,
  UNDER_THE_SEA_FONT_SIZES,
  GLOBAL_FONT_VARIANT,
  OCEAN_CONSERVATION_IMAGES
} from './UnderTheSeaConstants';

const CardMedia = lazy(() => import('@material-ui/core/CardMedia'));
const { WELCOME_TOPIC_DESCRIPTION_FONT, SUBTITLE } = UNDER_THE_SEA_FONT_SIZES;

/**
 * Conservation Link Page Component
 */
const ConservationLinkPage = ({ image }) => {
  const images =
    image ||
    importAllFiles(
      require.context(
        './images/oceanConservation',
        false,
        /\.(png|jpe?g|svg)$/,
        'lazy'
      )
    );
  const classes = useConservationLinkStyles();
  const { loading, error, data } = useQuery(oceanConservationQuery);
  const conservationLinks = data?.conservationLinks;
  const conservationLinksWithImages = conservationLinks?.map((link, index) => {
    return { ...link, image: OCEAN_CONSERVATION_IMAGES[index] };
  });

  return (
    <div className={classes.root}>
      <Typography
        variant={GLOBAL_FONT_VARIANT}
        gutterBottom
        color="textPrimary"
        component="h2"
      >
        Discover how you can help with Ocean Conservation!
      </Typography>
      <Typography className={classes.subTextMargin} component="div">
        <Box fontSize={SUBTITLE} className={classes.subText}>
          Read about and click on the organizations below to visit their site to
          learn more.
        </Box>
      </Typography>
      <Grid container spacing={3}>
        {loading ? (
          <OceanConservationPlaceholder />
        ) : (
          conservationLinksWithImages?.map(
            ({ id, name, url, descriptions, image }) => (
              <Grid item xs={12} key={id}>
                <Link rel="noopener" rel="noreferrer" href={url}>
                  <Card className={classes.card}>
                    <div className={classes.cover}>
                      <Suspense
                        fallback={
                          <Placeholder
                            className={classes.conservationPlaceholder}
                          >
                            <Placeholder.Image />
                          </Placeholder>
                        }
                      >
                        <CardMedia
                          component="img"
                          image={image}
                          height={CONSERVATION_IMAGE_HEIGHT}
                          width={CONSERVATION_PLACEHOLDER_IMAGE_WIDTH}
                          title={name}
                        />
                      </Suspense>
                    </div>
                    <CardActionArea>
                      <div className={classes.details}>
                        <CardContent className={classes.content}>
                          <Typography
                            component="h6"
                            variant={GLOBAL_FONT_VARIANT}
                            gutterBottom
                          >
                            <Box>{name}</Box>
                          </Typography>
                          <Typography color="textSecondary" component="div">
                            <Box fontSize={WELCOME_TOPIC_DESCRIPTION_FONT}>
                              {descriptions[0]?.content}
                            </Box>
                          </Typography>
                        </CardContent>
                      </div>
                    </CardActionArea>
                  </Card>
                </Link>
              </Grid>
            )
          )
        )}
      </Grid>
    </div>
  );
};

export default ConservationLinkPage;
