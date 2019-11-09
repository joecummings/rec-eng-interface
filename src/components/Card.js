import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import React from 'react';

export default function ImgMediaCard(props) {

  return (
    <Card>
      <CardActionArea>
        <a href={props.url} target="_blank">
        <CardMedia
          component="img"
          height="140"
          image="https://lh3.googleusercontent.com/QxpLwOvSGkVQECug9WzsIRL6_SBwox6McBLtMcrH8-K0ZUPMioL_Iru5PCyhVmbx2ypIb_N3XxmlcW7-2xauuHv_nO1VbGWvQTJE0NKH=s660"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            
          </Typography>
        </CardContent>
        </a>  
      </CardActionArea>
    </Card>
  );
}
