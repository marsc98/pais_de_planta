import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./privateRoute";
import Home from "./pages/Home";
import ParentsList from "./pages/ParentsList";
import RegisterParent from "./pages/RegisterParent";
import Family from './pages/Family';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/family" exact component={Family} />
      <PrivateRoute path="/" exact component={Home} />
      <PrivateRoute path="/parents" exact component={ParentsList} />
      <PrivateRoute path="/parent-register" exact component={RegisterParent} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
