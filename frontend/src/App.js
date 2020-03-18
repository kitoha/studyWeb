import React from "react";
import Home from "./components/MainPage/Home";
import ProblemTable from "./components/ProblemPage/ProblemTable";
import { Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Home}></Route>
        <Route path="/table/:tableName" component={ProblemTable}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
