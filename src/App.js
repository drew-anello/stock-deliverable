import React from "react";
import "./App.css";
//Import route and our components
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Stocks from "./pages/Stocks";
import Nav from "./components/Nav";
import Dashboard from "./pages/Dashboard";

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
        <Route path="/stocks">
          <Dashboard />
        </Route>
        <Route path="/stocks/:symbols">
          <Stocks />
        </Route>
        <Route
  path="/stocks/:symbol"
  render={(routerProps) => <Stocks {...routerProps} />}
/>
      </Switch>
    </div>
  );
}

export default App;