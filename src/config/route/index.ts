import React, { lazy, LazyExoticComponent } from "react";
import { MENU } from "@utils/routes";

const Homepage = lazy(() => import("@components/pages/home"));
const PageNotFound = lazy(() => import("@components/pages/not-found"));
const Contact = lazy(() => import("@components/pages/contact"));
const GalleryPage = lazy(() => import("@components/pages/gallery"));
const OffersPage = lazy(() => import("@components/pages/offers"));
const AboutPage = lazy(() => import("@components/pages/about"));

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
    component: GalleryPage,
    path: MENU.NAV_MENU_PATHS.GALLERY_PAGE,
  },
  {
    component: OffersPage,
    path: MENU.NAV_MENU_PATHS.OFFERS,
  },
  {
    component: AboutPage,
    path: MENU.NAV_MENU_PATHS.ABOUT,
  },
  {
    component: PageNotFound,
    path: MENU.NAV_MENU_PATHS.PAGE_NOT_FOUND,
  },
]);
