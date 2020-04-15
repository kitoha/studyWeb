import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../modules/OauthTokenReducer";
import SignIn from "../signPage/SignIn";
import { connect } from "react-redux";

const SignInContainer = ({ oAuthToken, login }) => {
  return <SignIn onSignIn={login}></SignIn>;
};

const mapStateToProps = state => ({
  oAuthToken: state.oAuthTokenReducer.oAuthToken
});

const mapDispatchToProps = dispatch => ({
  login: oAuthToken => {
    dispatch(login(oAuthToken));
  },
  logout: () => {
    dispatch(logout());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);
