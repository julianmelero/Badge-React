import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import BadgeNew from "./pages/BadgeNew";
import Badges from "./pages/Badges.js";

import Layout from "./layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/bages" component={Badges}></Route>
          <Route exact path="/bages/new" component={BadgeNew}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
