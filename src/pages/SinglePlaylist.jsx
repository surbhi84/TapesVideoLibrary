import { useNavigate, useParams } from "react-router-dom";
import { useUser, useMenu } from "hooks";
import { v4 as uuid } from "uuid";
import { deletePlaylistVideo } from "apiCalls";
import {
  ADDPLAYLISTVIDEO,
  DELPLAYLISTVIDEO,
} from "hooks/reducer/userReducer/types";
import { useEffect, useState } from "react";

export function SinglePlaylist() {
  const { id: playlistId } = useParams();
  const navigate = useNavigate();
  const [currentPlaylist, setCurrentPlaylist] = useState({ list: [] });
  const { setSuccessToast } = useMenu();

  const {
    user: {
      user: { playlists },
      encodedToken,
    },
    userDispatch,
    isAuth,
  } = useUser();

  useEffect(() => {
    const playlist = playlists.find((i) => i.id === playlistId);
    setCurrentPlaylist(playlist);
  }, [playlists]);

  async function removePlaylistVideoHandler(video, playlistId, encodedToken) {
    userDispatch({
      type: DELPLAYLISTVIDEO,
      payload: { videoId: video.id, playlistId },
    });
    try {
      await deletePlaylistVideo(video.id, playlistId, encodedToken);
    } catch (err) {
      userDispatch({
        type: ADDPLAYLISTVIDEO,
        payload: { video, playlistId },
      });
      setSuccessToast({
        show: true,
        msg: "Something went wrong",
      });
    }
  }

  return (
    <div className="flex flex-col flex-wrap px-8">
      {isAuth() && (
        <>
          <h2 className="text-sm xs:text-lg font-semibold text-gray-700 mt-4">
            {currentPlaylist.name}
          </h2>
          <hr className="my-1 color-slate-300" />

          <div className="flex flex-col">
            {currentPlaylist?.list.length > 0 ? (
              <>
                {currentPlaylist.list.map(
                  ({
                    id,
                    title,
                    creator,
                    views,
                    uploadedOn,
                    img,
                    avatar,
                    about,
                  }) => (
                    // VIDEOCARD
                    <div
                      className="flex flex-row items-center shadow-lg hover:bg-gray-100 gap-10 p-3 "
                      key={uuid()}
                      onClick={() => {
                        navigate(`/video/${id}`, {
                          state: id,
                        });
                      }}
                    >
                      {/* VIDEO THUMBNAIL*/}
                      <img src={img} className="h-36 w-48" loading="lazy" />

                      <div>
                        {/* VIDEO DETAILS*/}
                        <p className="font-bold text-md mt-2">{title}</p>

                        {/* Div containing avatar,grey text,about,button */}
                        <div className="flex flex-col gap-1 mt-2">
                          {/* Div containing grey text and avatar */}
                          <div className="flex flex-row gap-2">
                            <img
                              src={avatar}
                              alt="creator_avatar"
                              className="rounded-full h-10"
                            />

                            {/* GREY TEXT DIV */}
                            <div className="text-slate-600 text-sm">
                              <p>{creator}</p>
                              <span className="flex flex-row flex-wrap items-center">
                                {views}
                                <span className="h-1 w-1 m-2 mb-1 bg-slate-600 rounded-full"></span>
                                {uploadedOn}
                              </span>
                            </div>
                          </div>

                          {/* ABOUT OF VIDEO */}
                          <p className="py-2 text-sm  ">
                            {about.slice(0, 220)}...
                          </p>

                          <button
                            className="px-2 py-1 bg-gray-200 rounded-md text-sm hover:text-red-700 hover:bg-white self-end"
                            onClick={(e) => {
                              e.stopPropagation();
                              removePlaylistVideoHandler(
                                {
                                  id,
                                  title,
                                  creator,
                                  views,
                                  uploadedOn,
                                  img,
                                  avatar,
                                  about,
                                },
                                playlistId,
                                encodedToken
                              );
                            }}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </>
            ) : (
              <div className="flex flex-col items-center mt-4 ">
                <img
                  src="/assets/images/watch.svg"
                  alt="home cinema"
                  className="w-1/4"
                />
                <p className="text-md p-2">
                  Login and start adding videos to watch later
                </p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
