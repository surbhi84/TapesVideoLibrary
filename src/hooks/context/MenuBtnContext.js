import { createContext, useContext, useState } from "react";

const MenuBtnContext = createContext();

// CONTEXT COMPONENT
export function MenuProvider({ children }) {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <MenuBtnContext.Provider value={{ isMenu, setIsMenu }}>
      {children}
    </MenuBtnContext.Provider>
  );
}

// CUSTOM HOOK
export const useMenu = () => useContext(MenuBtnContext);
