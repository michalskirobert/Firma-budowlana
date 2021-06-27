import React, { LazyExoticComponent, Suspense } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { ROUTE_PATHS } from "./config/route";
import { NavMenu } from "./components/layout/nav";
import { Footer } from "@components/layout/footer";

const App = (): JSX.Element => {
  return (
    <Router>
      <NavMenu />
      <Suspense fallback={"Wczytywanie...."}>
        <Switch>
          {ROUTE_PATHS.map(
            (
              {
                exact,
                path,
                component,
              }: {
                exact?: boolean;
                path: string;
                component: LazyExoticComponent<React.ComponentType<string>>;
              },
              index
            ) => (
              <Route
                {...{ path, component, exact: exact as boolean, key: index }}
              />
            )
          )}
        </Switch>
        <Footer />
      </Suspense>
    </Router>
  );
};

export default App;
