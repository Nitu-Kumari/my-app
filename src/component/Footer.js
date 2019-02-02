import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

import Paper from '@material-ui/core/Paper';

import Link from '@material-ui/core/Link';




const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },


    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 1,
      paddingBottom: theme.spacing.unit * 1,
    },


    link: {
      margin: theme.spacing.unit,
    },

  },
});


const Url = 'JavaScript:;';

class Result extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        <MenuItem>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem>
          <IconButton color="inherit">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
      </Menu>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
          
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
              Hacker-news
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        


<Paper className={classes.root} elevation={1}>
        <Typography variant="h6" component="h6">
        Search
        </Typography>
      </Paper>

      
      
<Paper className={classes.paper}>
<Typography variant="h6" component="h3">
          Hacker News:Hacker is good site
        </Typography>
        <Typography component="p">
          1367Point| be used to build |6Years|9Comment | <Link href={Url} color="blue" className={classes.link}>
        {("https://www.techopedia.com/definition/26361/hacking")}
      </Link>
        </Typography>


<Typography variant="h6" component="h3">
          Hacker News:Hacker is good site
        </Typography>
        <Typography component="p">
          1367Point| be used to build |6Years| 6Comment| <Link href={Url} color="blue" className={classes.link}>
        {("https://www.techopedia.com/definition/26361/hacking")}
      </Link>
        </Typography>



        <Typography variant="h6" component="h3">
        GeekPrank Hacker Screen - The Best Hacker Simulator
        </Typography>
        <Typography component="p">
          189Point| be used to build |3Years| 4Comment| <Link href={Url} color="blue" className={classes.link}>
        {("https://www.techopedia.com/definition/26361/hacking")}
      </Link>
        </Typography>

        <Typography variant="h6" component="h3">
        Hacker Definition - TechTerms.com
        </Typography>
        <Typography component="p">
          136Point| be used to build |7Years| 2Comment| <Link href={Url} color="blue" className={classes.link}>
        {("https://www.techopedia.com/definition/26361/hacking")}
      </Link>
        </Typography>


        <Typography variant="h6" component="h3">
        The Hacker News - YouTube
        </Typography>
        <Typography component="p">
          1976Point| be used to build |9Years| 1Comment |<Link href={Url} color="blue" className={classes.link}>
        {("https://www.techopedia.com/definition/26361/hacking")}
      </Link>
        </Typography>


        <Typography variant="h6" component="h3">
        Hacker News - Wikipedia
        </Typography>
        <Typography component="p">
          187Point| be used to build |6Years| |12Comment <Link href={Url} color="blue" className={classes.link}>
        {("https://www.techopedia.com/definition/26361/hacking")}
      </Link>
        </Typography>
        </Paper>




        {renderMenu}
        {renderMobileMenu}
      </div>
    );
  }
}

Result.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Result);