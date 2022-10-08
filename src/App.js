import React from "react";
import "./App.css";
//Import route and our components
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Stock from "./components/Stock";
import Nav from "./components/Nav";
import Dashboard from "./pages/Dashboard";
import stocks from "./stock-data";

function App() {
  // We will use the Route component to specify each route
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/stock">
          <Dashboard />
        </Route>
        <Route path="/stocks/:symbol"
        render={(routerProps) => <Stock stocks={stocks} {...routerProps} />}>
          <Stock />
        </Route>
      </Switch>
    </div>
  );
}

export default App;