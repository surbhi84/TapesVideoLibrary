import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoPerson } from "react-icons/go";
import { MdVpnKey, MdAdd } from "react-icons/md";
import { HiEyeOff, HiEye } from "react-icons/hi";
import { authLogin } from "apiCalls";
import { LOGIN, useMenu, useUser } from "hooks";

export function AddPlaylist() {
  const { triggerLogin, setTriggerSignup, setTriggerLogin, setSuccessToast } =
    useMenu();
  const {
    user: {
      user: { playlists },
    },
    userDispatch,
  } = useUser();
  const { triggerAddPlaylist, setTriggerAddPlaylist } = useMenu();

  const navigate = useNavigate();
  const [playlist, setPlaylist] = useState("");
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
      console.error(err);
    }
  }

  console.log(playlist);
  return (
    <>
      {triggerAddPlaylist ? (
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
                  onChange={() => {}}
                />
                <div className="">
                  <MdAdd />
                </div>
              </div>
            )}

            <div className="flex flex-col items-center">
              {playlists.map((i) => {
                return (
                  <label
                    onChange={() => setPlaylist(i.name)}
                    key={i.name}
                    className
                  >
                    <input
                      type="checkbox"
                      className="accent-red-200 mr-2"
                    ></input>
                    {i.name}
                  </label>
                );
              })}
            </div>

            <button className="bg-gray-200 hover:bg-gray-100 hover:text-red-700 font-bold bg-red-700 text-white shadow-md rounded-md h-8 px-4 mt-6 w-64 disabled:opacity-50 ">
              Add
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
