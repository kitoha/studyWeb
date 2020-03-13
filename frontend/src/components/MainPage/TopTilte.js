import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  toolbarTitle: {
    flex: 1
  },
  cardMedia: {
    width: 160
  }
}));
function TopTitle() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Toolbar>
        <Grid item={true} xs={12} justify="space-between" container>
          <Grid item={true}></Grid>
          <Grid item={true}>
            <Typography
              component="h2"
              variant="h5"
              color="inherit"
              align="center"
              noWrap
              className={classes.toolbarTitle}
            >
              AlgoStudy
            </Typography>
          </Grid>
          <Grid item={true}>
            <Button
              variant="outlined"
              size="small"
              style={{ fontWeight: "bold", marginRight: 10 }}
            >
              로그인
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
      <Toolbar>
        <img
          src={require("../../image/title.jpg")}
          width="100%"
          height="370"
          alt="topimg"
        ></img>
      </Toolbar>
    </React.Fragment>
  );
}

export default TopTitle;
