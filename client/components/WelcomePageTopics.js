/**
 * Welcome Topics Component
 * Shows users cards which describe the content of the site
 *
 * Digital Media Design - Software Engineering Capstone 2019
 * Under the Sea: An interactive guide to our worlds oceans
 * @author Maggie Crocamo
 * {mjcrocamo@gmail.com, mjc494@g.harvard.edu}
 **/

import React, { lazy, Suspense } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { Placeholder } from 'semantic-ui-react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import { useQuery } from '@apollo/react-hooks';
import { welcomeTopicsQuery } from './UnderTheSeaQueries';
import { WelcomeTopicsPlaceholder } from './UnderTheSeaPlaceholders';
import { importAllFiles } from './UnderTheSeaUtils';
import { useWelcomeTopicStyles } from './UnderTheSeaStyles';
import {
  WELCOME_TOPIC_IMAGE_WIDTH,
  WELCOME_TOPIC_IMAGE_HEIGHT,
  UNDER_THE_SEA_FONT_SIZES,
  GLOBAL_FONT_VARIANT
} from './UnderTheSeaConstants';

const CardMedia = lazy(() => import('@material-ui/core/CardMedia'));
const {
  WELCOME_TOPIC_DESCRIPTION_FONT,
  WELCOME_TOPIC_TITLE_FONT
} = UNDER_THE_SEA_FONT_SIZES;

const welcomeCardImages = importAllFiles(
  require.context('./images/welcome', false, /\.(png|jpe?g|svg)$/, 'lazy')
);
/**
 * WelcomeTopics Component
 */
const WelcomeTopics = () => {
  const classes = useWelcomeTopicStyles();
  const { loading, error, data } = useQuery(welcomeTopicsQuery);

  return (
    <div className={classes.root}>
      <Typography
        variant={GLOBAL_FONT_VARIANT}
        gutterBottom
        color="textPrimary"
        component="h2"
      >
        Explore Interesting Content
      </Typography>
      <Grid container spacing={3}>
        {loading ? (
          <WelcomeTopicsPlaceholder />
        ) : (
          data?.welcomeTopics?.map(
            ({ id, title, image, description, route }) => (
              <Grid item xs={12} sm={6} key={id}>
                <RouterLink to={route}>
                  <Card className={classes.card}>
                    <CardActionArea>
                      <div className={classes.cover}>
                        <Suspense
                          fallback={
                            <Placeholder
                              className={classes.welcomeTopicPlaceholder}
                            >
                              <Placeholder.Image />
                            </Placeholder>
                          }
                        >
                          <CardMedia
                            component="img"
                            className={classes.cover}
                            image={image}
                            height={WELCOME_TOPIC_IMAGE_HEIGHT}
                            width={WELCOME_TOPIC_IMAGE_WIDTH}
                            title={title}
                          />
                        </Suspense>
                      </div>
                    </CardActionArea>
                    <CardActionArea>
                      <div className={classes.details}>
                        <CardContent className={classes.content}>
                          <Typography variant={GLOBAL_FONT_VARIANT}>
                            <Box
                              fontWeight="fontWeightBold"
                              fontSize={WELCOME_TOPIC_TITLE_FONT}
                            >
                              {title}
                            </Box>
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            <Box fontSize={WELCOME_TOPIC_DESCRIPTION_FONT}>
                              {description}
                            </Box>
                          </Typography>
                        </CardContent>
                      </div>
                    </CardActionArea>
                  </Card>
                </RouterLink>
              </Grid>
            )
          )
        )}
      </Grid>
    </div>
  );
};

export default WelcomeTopics;
