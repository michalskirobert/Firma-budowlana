import { useState } from "react";

import * as ICON from "@utils/icons";
import * as C from "@utils/constants";

export const useNavigationContainer = (): any => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const toggleNav = (): void => setIsNavOpen(!isNavOpen);

  const navigationItems = [
    {
      name: C.HOMEPAGE,
      link: C.HOME_ROUTE,
      icon: null,
    },
    {
      name: C.ABOUT,
      link: C.ABOUT_ROUTE,
      icon: null,
    },
    {
      name: C.GALLERY,
      link: C.GALLERY_ROUTE,
      icon: null,
    },
    {
      name: C.CONTANCT,
      link: C.CONTANCT_ROUTE,
      icon: null,
    },
  ];

  const contactItems = [
    {
      name: C.PHONE,
      value: "+51330005",
      Icon: ICON.PHONE,
    },
    {
      name: C.EMAIL,
      value: "example@domain.com",
      Icon: ICON.EMAIL,
    },
  ];

  return {
    isNavOpen,
    toggleNav,
    navigationItems,
    contactItems,
  };
};
