import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Manager from "./pages/manager";
import ManagerLogin from "./pages/managerlogin";
import ManagerRegister from "./pages/managerregister";
import Teammate from "./pages/teammate";
import TeammateLogin from "./pages/teammatelogin";
import TeammateRegister from "./pages/teammateregister";
import Dashboard from "./pages/dashboard";
import Schedule from "./pages/schedule";
import Announcements from "./pages/announcements";
import Huddle from "./pages/huddle";
import Records from "./pages/records";
import LiveFeed from "./pages/livefeed"
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/manager" component={Manager} />
        <Route exact path = "/manager/login" component = {ManagerLogin}/>
        <Route exact path = "/manager/register" component= {ManagerRegister}/>
        <Route exact path = "/teammate" component = {Teammate}/>
        <Route exact path = "/teammate/login" component = {TeammateLogin}/>
        <Route exact path = "/teammate/register" component = {TeammateRegister}/>
        <Route exact path = "/dashboard/:id" component = {Dashboard}/>
        <Route exact path = "/schedule/:id" component = {Schedule}/>
        <Route exact path = "/announcements/:id" component = {Announcements}/>
        <Route exact path = "/huddle/:id" component = {Huddle}/>
        <Route exact path = "/record/:id" component = {Records}/>
        <Route exact path = "/livefeed/:id/:time" component = {LiveFeed}/>
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
