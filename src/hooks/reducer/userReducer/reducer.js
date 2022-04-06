import { useReducer } from "react";
import {
  ADDHISTORY,
  DELHISTORY,
  GETHISTORY,
  LOGIN,
  LOGOUT,
  SETHISTORY,
  SIGNUP,
} from "./types";

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
      case ADDHISTORY: {
        return {
          ...state,
          user: { ...state.user, history: [...state.user.history, payload] },
        };
      }
      case DELHISTORY: {
        const newHistory = state.user.history.filter((i) => i.id !== payload);
        return { ...state, user: { ...state.user, history: newHistory } };
      }
      // case GETHISTORY: {
      //   return { ...state, user: { ...state.user, history : {...state.user.history} } };
      // }
      case SETHISTORY: {
        return payload;
      }
    }
  }

  return [user, userDispatch];
};
