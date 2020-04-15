import { combineReducers } from "redux";
import oauthTokenReducer from "./OauthTokenReducer";

const rootReducer = combineReducers({ oauthTokenReducer });

export default rootReducer;
