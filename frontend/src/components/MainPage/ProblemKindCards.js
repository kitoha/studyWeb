import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  Card,
  Typography,
  CardActions,
  CardContent,
  Button
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  card: {
    backgroundColor: "#cce0ff",
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
  }
}));

const cards = [
  "구현",
  "그리디",
  "동적계획법",
  "그래프",
  "정렬",
  "기하",
  "수학"
];

const numbers = [0, 1, 2, 3, 4, 5, 6];

function ProblemKindCards() {
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid}>
      <Grid container spacing={1}>
        {numbers.map(number => (
          <Grid item={true} key={number} xs={12} sm={6} md={4}>
            <Card className={classes.card} raised={true}>
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {cards[number]}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Go!
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ProblemKindCards;
