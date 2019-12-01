/**
 * Nav Bar Menu Dropdown Component
 * Visible on screen sizes that are small
 *
 * Digital Media Design - Software Engineering Capstone 2019
 * Under the Sea: An interactive guide to our worlds oceans
 * @author Maggie Crocamo
 * {mjcrocamo@gmail.com, mjc494@g.harvard.edu}
 **/

import React, { Fragment, useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { ROUTES } from './UnderTheSeaConstants';
import { Link as RouterLink } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { useNavBarMenuStyles } from './UnderTheSeaStyles';

/**
 * Nar Bar Menu Dropdown Component
 */
const NavBarMenuDropDown = () => {
  const classes = useNavBarMenuStyles();
  const [anchorElement, setAnchorElement] = useState(null);

  const handleMenuClick = ({ currentTarget }) => {
    setAnchorElement(currentTarget);
  };
  const handleClose = () => {
    setAnchorElement(null);
  };

  return (
    <Fragment>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="open drawer"
        onClick={handleMenuClick}
      >
        <MenuIcon fontSize="large" />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorElement}
        keepMounted
        open={Boolean(anchorElement)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <RouterLink className={classes.link} to={ROUTES.HOME}>
            <Button color="inherit">Home</Button>
          </RouterLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <RouterLink className={classes.link} to={ROUTES.OCEAN_CONSERVATION}>
            <Button color="inherit">Ocean Conservation</Button>
          </RouterLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <RouterLink className={classes.link} to={ROUTES.SEA_ANIMALS}>
            <Button color="inherit">Discover Ocean Life</Button>
          </RouterLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <RouterLink className={classes.link} to={ROUTES.GAMES}>
            <Button color="inherit">Games</Button>
          </RouterLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <RouterLink className={classes.link} to={ROUTES.SOURCES}>
            <Button color="inherit">Sources</Button>
          </RouterLink>
        </MenuItem>
      </Menu>
    </Fragment>
  );
};

export default NavBarMenuDropDown;
