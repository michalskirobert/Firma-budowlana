import { useState } from "react";

export const useNavigationContainer = (): any => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const toggleNav = (): void => setIsNavOpen(!isNavOpen);
  return {
    isNavOpen,
    toggleNav,
  };
};
