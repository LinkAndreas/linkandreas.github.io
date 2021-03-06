import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Articles from "./Articles.js";
import Licenses from "./Licenses.js";
import Timity from "./Timity.js";
import Publications from "./Publications.js";
import About from "./About.js";
import "../styles/Content.css";

export default function Content() {
  return (
    <div className="content">
      <Switch>
        <Redirect exact from="/" to="articles" />
        <Route path="/articles" component={Articles} />
        <Route path="/licenses" component={Licenses} />
        <Route path="/timity" component={Timity} />
        <Route path="/publications" component={Publications} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}
