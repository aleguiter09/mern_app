import React from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

import Login from "./components/login.js";
import Home from "./components/home.js";
import Register from "./components/register.js";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <div className="header">
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </div>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </div>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
