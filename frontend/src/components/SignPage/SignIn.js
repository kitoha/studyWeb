import React, { useState } from "react";
import {
  Typography,
  TextField,
  Grid,
  Button,
  Paper,
  Link
} from "@material-ui/core";
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

function SignIn() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = e => {
    setEmail(e.target.value);
  };

  const onChangePassword = e => {
    setPassword(e.target.value);
  };

  const submitLogin = () => {
    console.log(email + " " + password);
    axios
      .post("http://localhost:8080/api/v1/auth/login", {
        email: email,
        password: password
      })
      .then(response => {
        console.log("success login");
        console.log(response.data.accessToken);
        localStorage.setItem("accessToken", response.data.accessToken);
      })
      .catch(error => {
        console.log("error");
      });
  };
  return (
    <Grid container>
      <Grid item={true} xs={false} sm={4} md={7}>
        <div>
          <img src={require("../../image/title.jpg")} alt="sideImage"></img>
        </div>
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
          <Typography>Sign in</Typography>
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
          </form>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={submitLogin}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/signUp" variant="body2">
                {"가입하기"}
              </Link>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
}

export default SignIn;
