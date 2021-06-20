import { useState, useEffect } from "react";
import { contactItems, navigationItems } from "./data";

export const useNavigationContainer = (): any => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [width, setWidth] = useState(window.innerWidth);

  const toggleNav = (): void => setIsNavOpen(!isNavOpen);

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

  return {
    isNavOpen,
    toggleNav,
    navigationItems,
    contactItems,
    width,
  };
};
