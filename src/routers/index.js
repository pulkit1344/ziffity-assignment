import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../components/App";
import Films from "../components/Films";
import Residents from "../components/Residents";
import PlanetData from "../components/PlanetDetails";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/:id/films" component={Films} />
        <Route exact path="/:id/residents" component={Residents} />
        <Route exact path="/:id/details" component={PlanetData} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
