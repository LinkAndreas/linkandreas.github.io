import React from "react";
import { Route, Switch } from "react-router-dom";

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
        {/* <Route exact path="/" component={Articles} /> */}
        <Route exact path="/" component={Licenses} />
        <Route path="/timity" component={Timity} />
        <Route path="/publications" component={Publications} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}
