import { useUserReducer } from "hooks/reducer/userReducer/reducer";
import { createContext, useContext } from "react";

// CONTEXT
const UserContext = createContext();

// CONTEXT COMPONENT
export function UserProvider({ children }) {
  const [user, userDispatch] = useUserReducer();
  const isAuth = () =>
    user.encodedToken !== "" && user.encodedToken !== undefined;

  return (
    <UserContext.Provider value={{ user, userDispatch, isAuth }}>
      {children}
    </UserContext.Provider>
  );
}

// CUSTOM HOOK
export const useUser = () => useContext(UserContext);
