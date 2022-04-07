import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoPerson } from "react-icons/go";
import { MdVpnKey, MdAdd } from "react-icons/md";
import { HiEyeOff, HiEye } from "react-icons/hi";
import { authLogin, postPlaylist, postPlaylistVideo } from "apiCalls";
import { LOGIN, useMenu, useUser } from "hooks";
import { v4 as uuid } from "uuid";
import { useEffect } from "react";
import {
  ADDPLAYLISTVIDEO,
  ADDPLAYLIST,
  DELPLAYLIST,
} from "hooks/reducer/userReducer/types";
import { addNewPlaylistHandler } from "backend/controllers/PlaylistController";

export function AddPlaylist({ singleVideo }) {
  const {
    user: {
      user: { playlists },
      encodedToken,
    },
    userDispatch,
    isAuth,
  } = useUser();
  const {
    triggerAddPlaylist,
    setTriggerAddPlaylist,
    setTriggerLogin,
    setSuccessToast,
  } = useMenu();

  const navigate = useNavigate();
  const [playlistName, setPlaylistName] = useState("");
  const [password, setPassword] = useState("adarshBalika123");
  const [showInput, setShowInput] = useState(false);

  async function addPlaylistHandler() {
    try {
      const response = await authLogin(email, password);
      userDispatch({ type: LOGIN, payload: response.data });
      navigate("/");
      setTriggerLogin(false);
      setSuccessToast({ show: true, msg: "You are Logged in!" });
    } catch (err) {
      setSuccessToast({ show: true, msg: "Something went wrong" });
    }
  }

  async function addPlaylistVideoHandler(video, playlist) {
    userDispatch({
      type: ADDPLAYLISTVIDEO,
      payload: { video, playlistId: playlist.id },
    });
    try {
      const res = await postPlaylistVideo(video, playlist.id, encodedToken);
      setTriggerAddPlaylist(false);
      setSuccessToast({ show: true, msg: `Added to ${playlist.name} ` });
    } catch (err) {
      setSuccessToast({ show: true, msg: "Something went wrong" });
    }
  }

  async function addNewPlaylistFromInput(playlistName, video) {
    const newplaylistToAdd = { id: uuid(), name: playlistName, list: [video] };
    userDispatch({
      type: ADDPLAYLIST,
      payload: newplaylistToAdd,
    });
    try {
      const res = await postPlaylist(newplaylistToAdd, encodedToken);
      setTriggerAddPlaylist(false);
      setSuccessToast({ show: true, msg: `Added to ${playlistName} ` });
    } catch (err) {
      userDispatch({
        type: DELPLAYLIST,
        payload: newplaylistToAdd.id,
      });
      setSuccessToast({ show: true, msg: "Something went wrong" });
    }
  }

  return (
    <>
      {triggerAddPlaylist && (
        <div
          className="flex flex-row items-center justify-center bg-black/40 fixed w-full h-screen p-2 inset-0 overflow-hidden"
          onClick={() => setTriggerAddPlaylist(false)}
        >
          <div
            className="flex flex-col items-center absolute shadow-2xl bg-white rounded-md p-6 px-10 z-1"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="bg-gray-200 hover:bg-gray-100 font-bold text-sm text-red-700 rounded h-8 px-4 mb-2"
              onClick={() => {
                setShowInput((p) => !p);
              }}
            >
              Add New Playlist
            </button>

            {showInput && (
              <div className="rounded-sm border-black border-b-2 flex flex-row items-center gap-2 h-7 px-1 w-64 mb-2">
                <input
                  type="text"
                  className="w-full outline-none"
                  onChange={(e) => {
                    setPlaylistName(e.target.value);
                  }}
                />
                <button
                  className="text-xl hover:scale-110 hover:text-red-700"
                  onClick={() =>
                    addNewPlaylistFromInput(playlistName, singleVideo)
                  }
                >
                  <MdAdd />
                </button>
              </div>
            )}

            <div className="flex flex-col items-center">
              {playlists.map((playlist) => {
                return (
                  <label
                    onChange={() => setPlaylistName(playlist.name)}
                    key={playlist.name}
                    className
                  >
                    <input
                      type="checkbox"
                      className="accent-red-200 mr-2"
                      onClick={() =>
                        addPlaylistVideoHandler(singleVideo, playlist)
                      }
                    ></input>
                    {playlist.name}
                  </label>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
