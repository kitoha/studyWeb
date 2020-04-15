import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../modules/OauthTokenReducer";
import TopTilte from "../mainpage/TopTilte";

const TopTitleContainer = () => {
  const { oauthToken } = useSelector(({ oauthTokenReducer }) => ({
    oauthToken: oauthTokenReducer.oauthToken
  }));
  const dispatch = useDispatch();
  const onSignOut = useCallback(input => dispatch(logout()), [dispatch]);

  return <TopTilte oauthToken={oauthToken} onSignOut={onSignOut} />;
};

export default TopTitleContainer;
