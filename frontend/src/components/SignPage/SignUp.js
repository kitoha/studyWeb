import React, { useState } from "react";
import { Typography, TextField, Grid, Button, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  paper: {
    margin: theme.spacing(20, 5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

function SignUp() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onChangeEmail = e => {
    setEmail(e.target.value);
  };

  const onChangePassword = e => {
    setPassword(e.target.value);
  };

  const onChangeName = e => {
    setName(e.target.value);
  };

  const submitSignUp = () => {
    console.log(email + " " + password + " " + name);
    axios
      .post("http://localhost:8080/api/v1/auth/signup", {
        email: email,
        password: password,
        name: name
      })
      .then(response => {
        console.log("success");
        console.log(response.data);
        window.sessionStorage.setItem(
          "userInfo",
          JSON.stringify({
            email: email,
            name: name,
            token: response.data
          })
        );
      })
      .catch(error => {
        console.log("error");
      });
  };

  return (
    <Grid container>
      <Grid item={true} xs={false} sm={4} md={7}>
        <img src={require("../../image/title.jpg")} alt="sideImage"></img>
      </Grid>

      <Grid
        item={true}
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
      >
        <div className={classes.paper}>
          <Typography>Sign Up</Typography>
          <form noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={onChangeEmail}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={onChangePassword}
              autoComplete="current-password"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="codeforceId"
              label="codeforceId"
              type="codeforceId"
              id="codeforceId"
              value={name}
              onChange={onChangeName}
            />
          </form>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={submitSignUp}
          >
            Sign Up
          </Button>
        </div>
      </Grid>
    </Grid>
  );
}

export default SignUp;
