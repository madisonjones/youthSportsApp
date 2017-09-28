import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Manager from "./pages/Manager";
import ManagerLogin from "./pages/ManagerLogin";
import ManagerRegister from "./pages/ManagerRegister";
import Teammate from "./pages/Teammate";
import TeammateLogin from "./pages/TeammateLogin";
import TeammateRegister from "./pages/TeammateRegister";
import Dashboard from "./pages/Dashboard";
import Schedule from "./pages/Schedule";
import Announcements from "./pages/Announcements";
import Huddle from "./pages/Huddle";
import Records from "./pages/Records";
import LiveFeed from "./pages/LiveFeed"
import NoMatch from "./pages/NoMatch";
// import Navbar from "./components/Navbar";

const App = () => {
  return (
  <Router>
    <div>
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
      </Router>
  )}



export default App;
