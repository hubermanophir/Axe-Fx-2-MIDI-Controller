import "./App.css";
import Main from "./Pages/Main";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Pages/Login";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/main">
            <Main />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
