import React from "react";
import Home from "./components/mainpage/Home";
import ProblemTable from "./components/problemPage/ProblemTable";
import SignInContainer from "./components/containers/SignInContainer";
import SignUp from "./components/signPage/SignUp";
import SignIn from "./components/signPage/SignIn";
import { Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Home}></Route>
        <Route path="/table/:tableName" component={ProblemTable}></Route>
        <Route path="/signIn" component={SignIn}></Route>
        <Route path="/signUp" component={SignUp}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
