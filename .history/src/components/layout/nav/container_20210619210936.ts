import { useState } from "react";

export const useNavigationContainer = (): any => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const toggleNav = (): void => setIsNavOpen(!isNavOpen);

  const navigationItems = [
    {
      name: "Strona główna",
      link: "/",
      icon: null,
    },
  ];

  return {
    isNavOpen,
    toggleNav,
  };
};
