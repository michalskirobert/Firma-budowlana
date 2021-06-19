import React, { Suspense } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { ROUTE_PATHS } from "./config/route";
import { NavMenu } from "./components/layout/nav";
import { Footer } from "@components/layout/footer";

import "bootstrap/dist/css/bootstrap.css";

const App = (): JSX.Element => {
  return (
    <Router>
      <Suspense fallback={"Loading"}>
        <NavMenu />
        <Switch>
          {ROUTE_PATHS.map(({ exact, path, component }, index) => (
            <Route {...{ path, component, exact, key: index }} />
          ))}
        </Switch>
        <Footer />
      </Suspense>
    </Router>
  );
};

export default App;
