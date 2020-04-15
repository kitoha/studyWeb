import React, { useState, useEffect } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  toolbarTitle: {
    flex: 1
  },
  cardMedia: {
    width: 160
  },
  userLoginName: {
    marginRight: theme.spacing(2)
  }
}));

const TopTitle = ({ oauthToken, onSignOut }) => {
  const classes = useStyles();
  const token = oauthToken;

  console.log(oauthToken);
  const logOutOperation = () => {
    window.sessionStorage.clear();
    onSignOut();
  };

  /*useEffect(() => {
    const getToken = window.sessionStorage.getItem("userInfo")
      ? JSON.parse(window.sessionStorage.getItem("userInfo")).token
      : null;
    setToken(getToken);
  }, []);*/

  let loginButton;

  if (token == null) {
    loginButton = (
      <Link to={"/signIn"}>
        <Button
          variant="outlined"
          size="small"
          style={{ fontWeight: "bold", marginRight: 10 }}
        >
          로그인
        </Button>
      </Link>
    );
  } else {
    loginButton = (
      <Toolbar>
        <Typography className={classes.userLoginName}>
          {JSON.parse(window.sessionStorage.getItem("userInfo")).email}
        </Typography>
        <Button
          variant="outlined"
          size="small"
          style={{ fontWeight: "bold", marginRight: 10 }}
          onClick={logOutOperation}
        >
          로그아웃
        </Button>
      </Toolbar>
    );
  }

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
          <Grid item={true}>{loginButton}</Grid>
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
};

export default TopTitle;
