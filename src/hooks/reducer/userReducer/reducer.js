import { useReducer } from "react";
import { LOGIN, LOGOUT, SIGNUP } from "./types";

// REDUCER CUSTOM HOOK
export const useUserReducer = () => {
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
    },
    encodedToken: "",
  };
  const [user, userDispatch] = useReducer(getUserData, initialUser);

  function getUserData(state, { type, payload }) {
    switch (type) {
      case LOGIN: {
        return payload;
      }
      case LOGOUT: {
        return initialUser;
      }
    }
  }

  return [user, userDispatch];
};
