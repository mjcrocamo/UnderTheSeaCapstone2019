/**
 * Navigation Bar Component
 * Nav bar that always allows the user
 * to navigate throughout the site
 *
 * Digital Media Design - Software Engineering Capstone 2019
 * Under the Sea: An interactive guide to our worlds oceans
 * @author Maggie Crocamo
 * {mjcrocamo@gmail.com, mjc494@g.harvard.edu}
 **/

import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { useNavBarStyles } from './UnderTheSeaStyles';
import {
  UNDER_THE_SEA_FONT_SIZES,
  GLOBAL_FONT_VARIANT
} from './UnderTheSeaConstants';
import { Link as RouterLink } from 'react-router-dom';
import { ROUTES } from './UnderTheSeaConstants';
import NavBarMenuDropDown from './NavBarMenuDropDown';
import { CardMedia } from '@material-ui/core';
import UnderTheSeaLogo from './images/logo/oceanLogo.png';

const { TOOL_BAR_SUBTITLE, TOOL_BAR_HOME } = UNDER_THE_SEA_FONT_SIZES;

/**
 * NavBar Component
 */
const NavBar = () => {
  const classes = useNavBarStyles();
  return (
    <Fragment>
      <div className={classes.root}>
        <AppBar position="fixed" color="primary">
          <Toolbar className={classes.toolbar}>
            <CardMedia
              component="img"
              className={classes.logo}
              alt="UnderTheSeaLogo"
              height={30}
              image={UnderTheSeaLogo}
              title="UnderTheSeaLogo"
            />
            <RouterLink className="NavBar-title" to={ROUTES.HOME}>
              <Typography
                gutterBottom
                color="secondary"
                className={classes.title}
                variant={GLOBAL_FONT_VARIANT}
              >
                <Box fontWeight="fontWeightRegular">Under the Sea</Box>
              </Typography>
            </RouterLink>
            <RouterLink to={ROUTES.HOME}>
              <Typography
                component="div"
                color="secondary"
                className={classes.subTitle}
              >
                <Box
                  className="NavBar-subtitle"
                  fontWeight="fontWeightRegular"
                  fontStyle="oblique"
                  fontSize={TOOL_BAR_SUBTITLE}
                >
                  An Interactive Journey through our Planet's Oceans
                </Box>
              </Typography>
            </RouterLink>
            <Typography
              variant={GLOBAL_FONT_VARIANT}
              component="div"
              className={classes.links}
            >
              <RouterLink className="NavBar-link" to={ROUTES.SEA_ANIMALS}>
                <Button color="secondary">
                  <Box fontWeight="fontWeightMedium" fontSize={TOOL_BAR_HOME}>
                    Discover Ocean Life
                  </Box>
                </Button>
              </RouterLink>
            </Typography>
            <Typography
              variant={GLOBAL_FONT_VARIANT}
              component="div"
              className={classes.links}
            >
              <RouterLink
                className="NavBar-link"
                to={ROUTES.OCEAN_CONSERVATION}
              >
                <Button color="secondary">
                  <Box fontWeight="fontWeightMedium" fontSize={TOOL_BAR_HOME}>
                    Ocean Conservation
                  </Box>
                </Button>
              </RouterLink>
            </Typography>
            <Typography
              component="div"
              variant={GLOBAL_FONT_VARIANT}
              className={classes.links}
            >
              <RouterLink className="NavBar-link" to={ROUTES.GAMES}>
                <Button color="secondary">
                  <Box fontWeight="fontWeightMedium" fontSize={TOOL_BAR_HOME}>
                    Games
                  </Box>
                </Button>
              </RouterLink>
            </Typography>
            <Typography
              variant={GLOBAL_FONT_VARIANT}
              component="div"
              className={classes.links}
            >
              <RouterLink className="NavBar-link" to={ROUTES.SOURCES}>
                <Button color="secondary">
                  <Box fontWeight="fontWeightMedium" fontSize={TOOL_BAR_HOME}>
                    Sources
                  </Box>
                </Button>
              </RouterLink>
            </Typography>
            <Typography
              variant={GLOBAL_FONT_VARIANT}
              component="div"
              className={classes.homelink}
            >
              <RouterLink className="NavBar-link" to={ROUTES.HOME}>
                <Button color="secondary">
                  <Box fontWeight="fontWeightMedium" fontSize={TOOL_BAR_HOME}>
                    Home
                  </Box>
                </Button>
              </RouterLink>
            </Typography>
            <div className={classes.menu}>
              <NavBarMenuDropDown />
            </div>
          </Toolbar>
        </AppBar>
        <Toolbar />
      </div>
      <Toolbar />
    </Fragment>
  );
};

export default NavBar;
