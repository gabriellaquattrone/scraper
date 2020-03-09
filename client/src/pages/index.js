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

const Homepage = (props) => {
    const classes = useStyles();

    const [selectedArticle, setSelectedArticle] = useState({ id: '', heading: '', info: '', link: ''});
    const [isSelectedArticle, setIsSelectedArticle] = useState(false);
   
    const handleGetSelectedArticle = (articleId) => {
      API.findOneWhereUnsaved(articleId).then((responseSelectedArticle) => {
        console.log(responseSelectedArticle)
        setSelectedArticle(responseSelectedArticle.data);
        setIsSelectedArticle(true);
      })
    };

    const [articles, setArticles] = useState([]);

    useEffect(() => {
      API.findAllWhereUnsaved().then((responseArticles)=>{
        console.log(responseArticles);
        setArticles(responseArticles.data);
      })
    }, []);

    const handleSaveArticle = (articleId) => {
      API.saveArticle(articleId).then(savedArticle => {
        API.findAllWhereUnsaved().then((responseArticles) => {
          setArticles(responseArticles.data);
        })
      })
    };

    return (
    <div className={classes.root}>
    <Grid container spacing={3}>
      { isSelectedArticle===true ? (
        <>
       {console.log("Selected article: ", selectedArticle)} 
        <Card 
        handleGetSelectedArticle={handleGetSelectedArticle}
        isSelectedArticle={isSelectedArticle}
        cardArgs={selectedArticle} 
        comment='knowthyself'/>
        
        {
          selectedArticle.comments.map(s => {
            return <Card 
                    key={s._id} 
                    isSelectedArticle={isSelectedArticle}
                    comment={s.comment}
                    />;
          })
        }
        </>
      ) : (
        <>
      {articles.length !== 0 ? (
        <Grid item xs={12}>
         {articles.map(data => {
           return <Card 
           key={data._id} 
           handleGetSelectedArticle={handleGetSelectedArticle}
           handleSaveArticle={handleSaveArticle} 
           cardArgs={data}/> })}
        </Grid> ) : ( 
            <p> You have no articles. </p>
        )}
      </>
      )}
    </Grid>
    </div>
    )
}

export default Homepage;