import React from "react";
import { Route, Switch } from "react-router-dom";

import Articles from "../pages/Articles.js";
import Timity from "../pages/Timity.js";
import Publications from "../pages/Publications.js";
import About from "../pages/About.js";
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
