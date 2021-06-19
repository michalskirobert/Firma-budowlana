import { useState } from "react";

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
  ];

  return {
    isNavOpen,
    toggleNav,
    navigationItems,
  };
};
