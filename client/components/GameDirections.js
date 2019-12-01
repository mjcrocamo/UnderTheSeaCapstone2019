/**
 * The Game Directions Page Component
 * Shows users the game directions and allows
 * them to download the game on their computer
 *
 * Digital Media Design - Software Engineering Capstone 2019
 * Under the Sea: An interactive guide to our worlds oceans
 * @author Maggie Crocamo
 * {mjcrocamo@gmail.com, mjc494@g.harvard.edu}
 **/

import React, { lazy, Suspense } from 'react';
import Grid from '@material-ui/core/Grid';
import { Placeholder } from 'semantic-ui-react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import GetAppIcon from '@material-ui/icons/GetApp';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import { importAllFiles } from './UnderTheSeaUtils';
import { useGameDirectionsStyles } from './UnderTheSeaStyles';
import { makeStyles } from '@material-ui/core/styles';
import {
  UNDER_THE_SEA_FONT_SIZES,
  GLOBAL_FONT_VARIANT,
  GAME_PHOTO_HEIGHT,
  GAME_PHOTO_WIDTH
} from './UnderTheSeaConstants';

const CardMedia = lazy(() => import('@material-ui/core/CardMedia'));
const { SUBTITLE } = UNDER_THE_SEA_FONT_SIZES;

const useStyles = makeStyles(theme => ({
  getApp: {
    height: 60,
    width: 60
  }
}));

/**
 * Game Directions Component
 */
const GameDirections = ({ image, game }) => {
  const images =
    image ||
    importAllFiles(
      require.context('./images/games', false, /\.(png|jpe?g|svg)$/, 'lazy')
    );

  const SuperGames =
    game ||
    importAllFiles(require.context('./games', false, /\.(zip)$/, 'lazy'));

  const classes = useGameDirectionsStyles();
  const icons = useStyles();
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
        variant={GLOBAL_FONT_VARIANT}
        gutterBottom
        color="textPrimary"
        component="div"
      >
        <Box fontWeight="fontWeightMedium" fontSize={40}>
          Game Objective
        </Box>
      </Typography>
      <Typography color="textPrimary" component="div">
        <Box fontSize={SUBTITLE} className={classes.descriptions}>
          Clean up the ocean by collecting as much trash as possible. Progress
          through as many levels as you can and achieve your highest overall
          score.
        </Box>
      </Typography>
      <Typography
        variant={GLOBAL_FONT_VARIANT}
        gutterBottom
        color="textPrimary"
        component="div"
      >
        <Box fontWeight="fontWeightMedium" fontSize={40}>
          Watch Demo
        </Box>
      </Typography>
      <div className="GameVideo">
        <Suspense fallback={null}>
          <CardMedia
            className={classes.video}
            component="iframe"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/82E3UwfV_Sk"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Suspense>
      </div>
      <div className={classes.game}>
        <Paper className={classes.paper}>
          <Typography
            variant={GLOBAL_FONT_VARIANT}
            color="textPrimary"
            gutterBottom
            component="div"
          >
            <Box fontWeight="fontWeightMedium" fontSize={40}>
              Play Now
            </Box>
          </Typography>
          <Typography color="textPrimary" component="div">
            <Box fontSize={30}>
              MacOSX
              <Link download href="SuperGame_osx.zip">
                <GetAppIcon fontSize="large" className={icons.getApp} />
              </Link>
              Windows
              <Link download href="TheGreatOceanCleanUp-win64.zip">
                <GetAppIcon fontSize="large" className={icons.getApp} />
              </Link>
            </Box>
          </Typography>
        </Paper>
      </div>
      <Typography
        variant={GLOBAL_FONT_VARIANT}
        gutterBottom
        color="textPrimary"
        component="div"
      >
        <Box fontWeight="fontWeightMedium" fontSize={40}>
          Controls and Special Power-Ups
        </Box>
      </Typography>
      <Typography color="textPrimary" component="div">
        <Box m={3} className={classes.descriptions}>
          <Typography variant="body1" component="div">
            <Box fontWeight="fontWeightRegular" fontSize={SUBTITLE}>
              <strong className={classes.controls}>Jump:</strong> Space-Bar
            </Box>
            <Box fontWeight="fontWeightRegular" fontSize={SUBTITLE}>
              <strong className={classes.controls}>Move Right:</strong>{' '}
              Right-Arrow
            </Box>
            <Box fontWeight="fontWeightRegular" fontSize={SUBTITLE}>
              <strong className={classes.controls}>Move Left:</strong>{' '}
              Left-Arrow
            </Box>
            <Box fontWeight="fontWeightRegular" fontSize={SUBTITLE}>
              <strong className={classes.controls}>Hit Enemy:</strong>{' '}
              Shift-Left or Shift-Right
            </Box>
            <Box fontWeight="fontWeightRegular" fontSize={SUBTITLE}>
              <strong className={classes.controls}>Special Power-Up:</strong>{' '}
              Grab a falling starfish and run in both directions picking up
              anything in site. Picking up any trash or killing any enemies in
              this state is worth double the points.
            </Box>
            <Box fontWeight="fontWeightRegular" fontSize={SUBTITLE}>
              <strong className={classes.controls}>Pause/Play:</strong> Enter
            </Box>
          </Typography>
        </Box>
      </Typography>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={6}>
          <div className={classes.cover}>
            <Suspense
              fallback={
                <Placeholder className={classes.gamePlaceholder}>
                  <Placeholder.Image />
                </Placeholder>
              }
            >
              <CardMedia
                component="img"
                image="game2.png"
                height={GAME_PHOTO_HEIGHT}
                width={GAME_PHOTO_WIDTH}
                title="The Great Ocean Clean Up Game Photo"
              />
            </Suspense>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant={GLOBAL_FONT_VARIANT}
            gutterBottom
            color="textPrimary"
            component="div"
          >
            <Box fontWeight="fontWeightMedium" fontSize={40}>
              Scoring Points
            </Box>
          </Typography>
          <Typography color="textPrimary" component="div">
            <Typography color="textPrimary" component="div">
              <Box fontSize={SUBTITLE}>
                You must score enough points to advance to the next level before
                the timer runs out. The timer gets shorter as the levels
                increase, and resets once you advance to a new level
              </Box>
              <Box fontSize={SUBTITLE}>
                There are 4 ways to accumulate points:
              </Box>
              <Box
                m={2}
                fontWeight="fontWeightRegular"
                className={classes.description}
                fontSize={SUBTITLE}
              >
                <strong className={classes.controls}>1.</strong> Collect trash
                that falls from the top of the screen:{' '}
                <strong className={classes.controls}>+ 10pts</strong>
              </Box>
              <Box m={2} fontWeight="fontWeightRegular" fontSize={SUBTITLE}>
                <strong className={classes.controls}>2.</strong> Jump on or hit
                enemies: <strong className={classes.controls}>+ 5pts</strong>
              </Box>
              <Box m={2} fontWeight="fontWeightRegular" fontSize={SUBTITLE}>
                <strong className={classes.controls}>3.</strong> Grab the one
                falling sea turtle:{' '}
                <strong className={classes.controls}>+ 30pts</strong>
              </Box>
              <Box m={2} fontWeight="fontWeightRegular" fontSize={SUBTITLE}>
                <strong className={classes.controls}>4.</strong> Collect gems or
                coins: <strong className={classes.controls}>+ 5pts</strong>
              </Box>
            </Typography>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant={GLOBAL_FONT_VARIANT}
            gutterBottom
            color="textPrimary"
            component="div"
          >
            <Box fontWeight="fontWeightMedium" fontSize={40}>
              Advancing Levels
            </Box>
          </Typography>
          <Typography color="textPrimary" component="div">
            <Box fontSize={SUBTITLE}>
              There are two ways to advance a level:
            </Box>
            <Typography color="textPrimary" component="div">
              <Box
                m={3}
                fontWeight="fontWeightRegular"
                className={classes.description}
                fontSize={SUBTITLE}
              >
                <strong className={classes.controls}>1.</strong> Score enough
                points to reach a score that is higher than the "Level Limit"
                score. The score to reach increases by 10 pts per level.
              </Box>
              <Box m={3} fontWeight="fontWeightRegular" fontSize={SUBTITLE}>
                <strong className={classes.controls}>2.</strong> Grab the sea
                turtle if you see it falling, which (may) only spawn once per
                level during the last 40 seconds.
              </Box>
            </Typography>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant={GLOBAL_FONT_VARIANT}
            gutterBottom
            color="textPrimary"
            component="div"
          >
            <Box fontWeight="fontWeightMedium" fontSize={40}>
              Losing Points & Taking Damage
            </Box>
          </Typography>
          <Typography color="textPrimary" component="div">
            <Typography color="textPrimary" component="div">
              <Box
                m={3}
                fontWeight="fontWeightRegular"
                className={classes.description}
                fontSize={SUBTITLE}
              >
                <strong className={classes.controls}>1.</strong> Lose 5 pts for
                every piece of trash that hits the ground that does not get
                picked up in time
              </Box>
              <Box m={3} fontWeight="fontWeightRegular" fontSize={SUBTITLE}>
                <strong className={classes.controls}>2.</strong> You are
                provided 4 hearts for health at the start of the game. One hit
                is worth half a heart. If you lose all health at any time the
                game is over.
              </Box>
            </Typography>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <div className={classes.cover}>
            <Suspense
              fallback={
                <Placeholder className={classes.gamePlaceholder}>
                  <Placeholder.Image />
                </Placeholder>
              }
            >
              <CardMedia
                component="img"
                image="game1.png"
                height={GAME_PHOTO_HEIGHT}
                width={GAME_PHOTO_WIDTH}
                title="The Great Ocean Clean Up Game Photo"
              />
            </Suspense>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default GameDirections;
