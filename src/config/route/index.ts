import React, { lazy, LazyExoticComponent } from "react";
import { MENU } from "@utils/routes";

const Homepage = lazy(() => import("@components/pages/home"));
const PageNotFound = lazy(() => import("@components/pages/not-found"));
const Contact = lazy(() => import("@components/pages/contact"));

export const ROUTE_PATHS: readonly {
  exact?: boolean;
  path: string;
  component: LazyExoticComponent<React.ComponentType<string>>;
}[] = Object.freeze([
  {
    exact: true,
    component: Homepage,
    path: MENU.NAV_MENU_PATHS.HOME_PAGE,
  },
  {
    component: Contact,
    path: MENU.NAV_MENU_PATHS.CONTACT_PAGE,
  },
  {
    component: PageNotFound,
    path: MENU.NAV_MENU_PATHS.PAGE_NOT_FOUND,
  },
]);
