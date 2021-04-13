import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import BadgeNew from "./pages/BadgeNew";
import Badges from "./pages/Badges.js";

function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/bages" component={Badges}></Route>
            <Route exact path="/bages/new" component={BadgeNew}></Route>
        </Switch>
      
    </BrowserRouter>
  );
}

export default App;
