import React from "react";
import { Route, Switch } from "react-router-dom";

import Articles from "./Articles.js";
import Timity from "./Timity.js";
import Publications from "./Publications.js";
import About from "./About.js";
import "../styles/Content.css";

export default function Content() {
  return (
    <div className="content">
      <Switch>
        <Route exact path="/" component={Articles} />
        <Route path="/timity" component={Timity} />
        <Route path="/publications" component={Publications} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}
