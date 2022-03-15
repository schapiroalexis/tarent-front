import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuItems from './MenuItems';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CustomAppBar from './CustomAppBar';
//import { selectSession } from 'features/session';
import { useAppSelector } from 'app/hooks';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    width: '100vw'
  },
  container: {
    paddingTop: theme.spacing(7),
    paddingBottom: theme.spacing(4)
  },
  logo: {
    //@alexis @todo: wrong use of theme.spacing
    height: theme.spacing(7),
    margin: 'auto'
  },
  toolbar: {
    // paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingTop: theme.spacing(0),
    paddingRight: theme.spacing(1),
    ...theme.mixins.toolbar
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
    }),
    height: '100vh'
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9)
    }
  }
}));

const DrawerContainer = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  // const session = useAppSelector(selectSession);
  return (
    <Box className={classes.root}>
      <CssBaseline />
      <CustomAppBar open={open} handleDrawerOpen={() => setOpen(!open)} />
      <Drawer
        anchor="left"
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
        }}
        open={open}
      >
        <Box className={classes.toolbarIcon}>
          <IconButton onClick={() => setOpen(!open)}>
            <ChevronLeftIcon />
          </IconButton>
        </Box>
        <MenuItems />
      </Drawer>
      <Container maxWidth={false} className={classes.container}>
        <Box pt={4}>{props.children}</Box>
      </Container>
    </Box>
  );
};

export default DrawerContainer;
