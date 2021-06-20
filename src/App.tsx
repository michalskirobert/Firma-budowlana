import React, { LazyExoticComponent, Suspense } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { ROUTE_PATHS } from "./config/route";
import { NavMenu } from "./components/layout/nav";
import { Footer } from "@components/layout/footer";
import PageNotFound from "@components/pages/not-found";

const App = (): JSX.Element => {
  return (
    <Router>
      <Suspense fallback={"Wczytywanie...."}>
        <NavMenu />
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
          <Route path="*" component={PageNotFound} exact />
        </Switch>
        <Footer />
      </Suspense>
    </Router>
  );
};

export default App;
