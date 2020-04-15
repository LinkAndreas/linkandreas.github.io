import React from "react";
import { Route, Switch } from "react-router-dom";

import Articles from "../pages/Articles.js";
import Timity from "../pages/Timity.js";
import About from "../pages/About.js";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Articles} />
      <Route path="/timity" component={Timity} />
      <Route path="/about" component={About} />
    </Switch>
  );
}
