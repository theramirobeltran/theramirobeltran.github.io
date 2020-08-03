import React from "react";
import { Route, Switch } from "react-router-dom";

import _404Page from "./_404";
import HomePage from "./home";
// import CanvasPage from "./canvas";
// import WordsPage from "./words";

export default () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    {/* <Route path="/canvas" component={CanvasPage} />
    <Route path="/words" component={WordsPage} /> */}
    <Route component={_404Page} />
  </Switch>
);
