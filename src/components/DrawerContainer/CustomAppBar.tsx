import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import BlurOnIcon from '@material-ui/icons/BlurOn';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import logo from 'assets/tarent.png';

import i18next from 'i18next';
import { PublicRounded } from '@material-ui/icons';

type CustomAppBarType = {
  handleDrawerOpen: () => void;
  open: boolean;
};

//@alexis @todo: should evaluate if state handling inside this cmp can be improved.

const CustomAppBar = ({ open, handleDrawerOpen }: CustomAppBarType) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorEl_Lang, setAnchorEl_Lang] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClick_lang = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl_Lang(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose_Lang = () => {
    setAnchorEl_Lang(null);
  };

  //Added this below function to hide the menuitem for after language select effect
  const handleHide_Lang = (lang?: string) => {
    i18next.changeLanguage(lang);
    setAnchorEl_Lang(null);
  };
  //const handleLogOut = () => manager.signoutRedirect().then(() => {});

  return (
    <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
        >
          <MenuIcon />
        </IconButton>

        <img alt="company logo" className={classes.logo} src={logo} />

        <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={handleClick_lang}>
          <Badge color="secondary">
            <PublicRounded />
          </Badge>
        </IconButton>
        <Menu
          id="simple-menu_Lang"
          anchorEl={anchorEl_Lang}
          keepMounted
          open={Boolean(anchorEl_Lang)}
          onClose={handleClose_Lang}
        >
          <MenuItem onClick={e => handleHide_Lang('en')}>EN</MenuItem>
          <MenuItem onClick={e => handleHide_Lang('de')}>DE</MenuItem>
        </Menu>

        <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={handleClick}>
          <Badge color="secondary">
            <BlurOnIcon />
          </Badge>
        </IconButton>
        <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem onClick={() => {}}>LogOut</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;

//@alexis @todo: adapt to mediaQuery, make responsive
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  logo: {
    height: theme.spacing(7),
    margin: 'auto'
  },
  toolbar: {
    // paddingRight: 24, // keep right padding when drawer closed
  },

  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {},
  menuButtonHidden: {
    display: 'none'
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  }
}));
