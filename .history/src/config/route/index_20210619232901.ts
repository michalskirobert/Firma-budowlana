import { lazy } from "react";
import { MENU } from "@utils/routes";

const Homepage = lazy(() => import("@components/pages/home"));

export const ROUTE_PATHS: readonly any[] = Object.freeze([
  {
    exact: true,
    component: Homepage,
    path: MENU.NAV_MENU_PATHS.HOME_PAGE,
  },
  {
    component: Homepage,
    path: MENU.NAV_MENU_PATHS.ABOUT_PAGE,
  },
  {
    component: Homepage,
    path: MENU.NAV_MENU_PATHS,
  },
]);
