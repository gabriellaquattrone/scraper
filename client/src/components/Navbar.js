import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  // State that will keep track of whatever page I am on
  const { currentPage, setCurrentPage} = useState(window.location.href);

  console.log(currentPage)
  return (
    
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
            {currentPage === "/" ? (
                <>
                <Button color="inherit">Scrape</Button>
                <Button component={Link} to="/saved" color="inherit">Saved</Button>
                </> 
                ) : (
                <Button component={Link} to="/" color="inherit">Home</Button>
                 ) }   
                
        </Toolbar>
      </AppBar>
    </div>
  );
}
