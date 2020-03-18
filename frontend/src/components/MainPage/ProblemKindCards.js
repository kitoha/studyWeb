import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import {
  Container,
  Grid,
  Card,
  Typography,
  CardMedia,
  CardActionArea,
  CardContent
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  cardContent: {
    flexGrow: 1
  },
  media: {
    height: 200
  }
}));

const cards = [
  "brute force",
  "data structures",
  "implementation",
  "greedy",
  "dp",
  "graphs",
  "sortings",
  "geometry",
  "math"
];

const numbers = [0, 1, 2, 3, 4, 5, 6];

function ProblemKindCards() {
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid}>
      <Grid container spacing={1}>
        {numbers.map(number => (
          <Grid item={true} key={number} xs={12} sm={6} md={4}>
            <Link to={`/table/${cards[number]}`}>
              <Card className={classes.card} raised={true}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={require("../../image/title.jpg")}
                    title={cards[number]}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom component="h1">
                      {cards[number]}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ProblemKindCards;
