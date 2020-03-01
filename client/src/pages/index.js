import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';

// Components
import Card from "../components/Card";
import Grid from '@material-ui/core/Grid';

// API
import API from "../utils/API";


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      padding: '40px'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const Homepage = () => {
    const classes = useStyles();

    const [articles, setArticles] = useState([]);

    useEffect(() => {
      API.findAllWhereUnsaved().then((responseArticles)=>{
        console.log(responseArticles)
      })
    })
    return (
    <div className={classes.root}>
    <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </Grid>
    </Grid>
    </div>
    )
}

export default Homepage;