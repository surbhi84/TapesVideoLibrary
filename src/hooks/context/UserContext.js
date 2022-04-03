import { createContext, useContext, useState } from "react";
import { useReducer } from "react/cjs/react.production.min";

const UserContext = createContext();

// CONTEXT COMPONENT
export function MenuProvider({ children }) {
  const initialUser = {
    user: {
      id: "12cddc03-f582-4b7d-9bc8-396190380624",
      firstName: "Adarsh",
      lastName: "Balika",
      email: "adarshbalika@gmail.com",
      likes: [],
      history: [],
      playlists: [],
    },
  };
  const [user, userDispatch] = useReducer(getUserData, initialUser);

  function getUserData(state, { type, payload }) {
    switch (type) {
    }
  }

  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
}

// CUSTOM HOOK
export const useUser = () => useContext(UserContext);
