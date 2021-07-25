import "./App.css";
import Main from "./Pages/Main";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Pages/Login";
import { DataProvider } from "./Context/AppContext";

function App() {
  return (
    <div className="App">
      <DataProvider>
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
      </DataProvider>
    </div>
  );
}

export default App;
