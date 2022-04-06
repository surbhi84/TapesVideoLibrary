import { useReducer } from "react";
import {
  ADDHISTORY,
  ADDLIKEDVIDEO,
  ADDWATCHLATER,
  DELHISTORY,
  DELWATCHLATER,
  DELLIKEDVIDEO,
  LOGIN,
  LOGOUT,
  SETHISTORY,
  ADDPLAYLIST,
  DELPLAYLIST,
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
      watchLater: [],
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

      case SETHISTORY: {
        return payload;
      }

      case ADDLIKEDVIDEO: {
        return {
          ...state,
          user: { ...state.user, likes: [...state.user.likes, payload] },
        };
      }

      case DELLIKEDVIDEO: {
        const newLikes = state.user.likes.filter((i) => i.id !== payload);
        return { ...state, user: { ...state.user, likes: newLikes } };
      }

      case ADDWATCHLATER: {
        return {
          ...state,
          user: {
            ...state.user,
            watchLater: [...state.user.watchLater, payload],
          },
        };
      }

      case DELWATCHLATER: {
        const newWatchLater = state.user.watchLater.filter(
          (i) => i.id !== payload
        );
        return { ...state, user: { ...state.user, watchLater: newWatchLater } };
      }

      case ADDPLAYLIST: {
        return {
          ...state,
          user: {
            ...state.user,
            playlists: [...state.user.playlists, ...payload],
          },
        };
      }

      case DELPLAYLIST: {
        const newPlaylists = state.user.playlists.filter(
          (i) => i.id !== payload
        );
        return { ...state, user: { ...state.user, playlists: newPlaylists } };
      }
    }
  }

  return [user, userDispatch];
};
