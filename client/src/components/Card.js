import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    marginBottom: '40px'
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(data) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          <a href={data.cardArgs.link} className="brand-logo">{data.cardArgs.heading}</a>    
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {data.cardArgs.info}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={() => data.handleSaveArticle(data.cardArgs._id)} size="small" color="primary">
          Saved
        </Button>
        <Button size="small" color="primary">
          Comment
        </Button>
      </CardActions>
    </Card>
  );
}
