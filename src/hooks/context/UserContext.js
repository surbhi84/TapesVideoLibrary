import { useUserReducer } from "hooks/reducer/userReducer/reducer";
import { createContext, useContext } from "react";

const initialUser = {
  user: {
    id: "",
    name: "Adarsh Balika",
    email: "adarshbalika@gmail.com",
    createdAt: "",
    updatedAt: "",
    likes: [],
    history: [],
    playlists: [],
    watchLater: [],
  },
  encodedToken: "",
};

// CONTEXT
const UserContext = createContext({
  user: initialUser.user,
  userDispatch: () => {},
  isAuth: () => {},
});

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
