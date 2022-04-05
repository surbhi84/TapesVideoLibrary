import { createContext, useContext, useState } from "react";

const MenuBtnContext = createContext();

// CONTEXT COMPONENT
export function MenuProvider({ children }) {
  const [isMenu, setIsMenu] = useState(false);
  const [triggerLogin, setTriggerLogin] = useState(false);
  const [triggerSignup, setTriggerSignup] = useState(false);
  const [successToast, setSuccessToast] = useState({
    show: false,
    msg: "",
  });

  return (
    <MenuBtnContext.Provider
      value={{
        isMenu,
        setIsMenu,
        triggerLogin,
        setTriggerLogin,
        triggerSignup,
        setTriggerSignup,
        successToast,
        setSuccessToast,
      }}
    >
      {children}
    </MenuBtnContext.Provider>
  );
}

// CUSTOM HOOK
export const useMenu = () => useContext(MenuBtnContext);
