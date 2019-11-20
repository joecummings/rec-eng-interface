import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import React from 'react';

export default function ImgMediaCard(props) {

  return (
    <Card style={{ height: "100%" }}>
      <CardActionArea>
        <a href={props.url} target="_blank">
          <CardMedia
            component="img"
            style={{ height: 180 }}
            image={props.image}
            title="Hello World"
          />
          <CardContent style={{ height: "100%" }}>
            <Typography variant="subtitle1" color="textPrimary">
              {props.title}
            </Typography>
          </CardContent>
        </a>
      </CardActionArea>
    </Card>
  );
}
