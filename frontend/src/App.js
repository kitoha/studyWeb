import React from "react";
import Home from "./components/MainPage/Home";
import ProblemTable from "./components/ProblemPage/ProblemTable";
import SignIn from "./components/SignPage/SignIn";
import SignUp from "./components/SignPage/SignUp";
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
