import { deletePlaylist, getPlaylists } from "apiCalls";
import { ADDPLAYLIST, DELPLAYLIST } from "hooks/reducer/userReducer/types";
import { MdDelete } from "react-icons/md";
import { useEffect } from "react";
import { useUser } from "hooks";
import { Link, useNavigate } from "react-router-dom";

export function MyPlaylist() {
  const {
    user: {
      user: { playlists },
      encodedToken,
    },
    userDispatch,
  } = useUser();

  const navigate = useNavigate();

  async function playlistDeleteHandler(playlist) {
    userDispatch({
      type: DELPLAYLIST,
      payload: playlist.id,
    });
    try {
      await deletePlaylist(playlist.id, encodedToken);
    } catch (err) {
      userDispatch({
        type: ADDPLAYLIST,
        payload: [playlist],
      });
      setSuccessToast({
        show: true,
        msg: "Something went wrong",
      });
    }
  }

  useEffect(() => {
    async () => {
      const response = await getPlaylists();
      userDispatch({ type: ADDPLAYLIST, payload: response.data.playlists });
    };
  });
  return (
    <>
      <div className="flex flex-col flex-wrap px-8">
        <h2 className="text-sm xs:text-lg font-semibold text-gray-700 mt-4">
          My Playlist{" "}
        </h2>
        <hr className="my-1 color-slate-300" />
      </div>

      {playlists.length > 0 ? (
        <div className="grid grid-cols-auto-fit justify-center">
          {playlists.map((i) => (
            <div
              className=" flex flex-row p-3 items-center w-64 h-16 shadow-md m-4 rounded-sm text-md hover:scale-105"
              onClick={() => navigate(`/playlist/${i.id}`)}
              key={i.id}
            >
              <div>
                {i.name}
                <div className="text-slate-600 text-xs self-end">
                  {i.list.length} videos
                </div>
              </div>

              <div
                className="text-xl ml-auto mt-auto hover:scale-105 text-red-700"
                onClick={(e) => {
                  e.stopPropagation();
                  playlistDeleteHandler(i);
                }}
              >
                <MdDelete />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center mt-4 ">
          <img
            src="/assets/images/watch.svg"
            alt="home cinema"
            className="w-1/4"
          />
          <p className="text-xs xs:text-base p-2">
            Login and start adding videos to playlist.
          </p>
        </div>
      )}
    </>
  );
}
