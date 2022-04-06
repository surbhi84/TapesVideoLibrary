import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BiLike, BiDislike } from "react-icons/bi";
import {
  MdOutlineWatchLater,
  MdThumbDown,
  MdThumbUp,
  MdWatchLater,
} from "react-icons/md";
import { RiPlayListAddLine } from "react-icons/ri";
import { IconContext } from "react-icons";
import { useVideos, useUser, useMenu } from "hooks";
import {
  postLike,
  deleteLike,
  postWatchLater,
  deleteWatchLater,
} from "apiCalls";
import {
  ADDLIKEDVIDEO,
  DELLIKEDVIDEO,
  DELWATCHLATER,
  ADDWATCHLATER,
} from "hooks/reducer/userReducer/types";
import { AddPlaylist } from "components/AddPlaylist";

export function SingleVideo() {
  const { id: videoId } = useParams();
  const { videoList } = useVideos();
  const { setSuccessToast, setTriggerAddPlaylist } = useMenu();
  const [like, setLiked] = useState(false);
  const [dislike, setDislike] = useState(false);
  const [watchLater, setWatchLater] = useState(false);
  const {
    user: {
      user: { likes: likesArray, watchLater: watchLaterArray },
      encodedToken,
    },
    isAuth,
    userDispatch,
  } = useUser();

  useEffect(() => {
    if (likesArray && likesArray.some((i) => i.id === videoId)) setLiked(true);
    if (watchLaterArray && watchLaterArray.some((i) => i.id === videoId))
      setWatchLater(true);
  }, []);

  const singleVideo = videoList.find((vid) => vid.id === videoId);

  // LIKEHANDLER

  async function likeHandler(video, like) {
    try {
      if (isAuth()) {
        if (like) {
          setLiked(false);
          try {
            await deleteLike(video.id, encodedToken);
            userDispatch({ type: DELLIKEDVIDEO, payload: video.id });
          } catch (err) {
            setLiked(true);
            console.error(err);
            setSuccessToast({ show: true, msg: "Something went wrong" });
          }
        } else {
          setLiked(true);
          try {
            await postLike(video, encodedToken);
            userDispatch({ type: ADDLIKEDVIDEO, payload: video });
          } catch (err) {
            setLiked(false);
            console.error(err);

            setSuccessToast({ show: true, msg: "Something went wrong" });
          }
        }
      } else {
        setSuccessToast({
          show: true,
          msg: "Hey! You have to login for this feature.",
        });
      }
    } catch (err) {
      console.error(err);
    }
  }

  // DISLIKE HANDLER

  function dislikeHandler() {
    isAuth()
      ? setDislike((p) => !p)
      : setSuccessToast({
          show: true,
          msg: "Hey! You have to login for this feature.",
        });
  }

  // WATCHLATER HANDLER

  async function watchLaterHandler(video, watchLater) {
    try {
      if (isAuth()) {
        if (watchLater) {
          setWatchLater(false);
          try {
            await deleteWatchLater(video.id, encodedToken);
            userDispatch({ type: DELWATCHLATER, payload: video.id });
          } catch (err) {
            setWatchLater(true);
            console.error(err);
            setSuccessToast({ show: true, msg: "Something went wrong" });
          }
        } else {
          setWatchLater(true);
          try {
            await postWatchLater(video, encodedToken);
            userDispatch({ type: ADDWATCHLATER, payload: video });
          } catch (err) {
            setWatchLater(false);
            console.error(err);
            setSuccessToast({ show: true, msg: "Something went wrong" });
          }
        }
      } else {
        setSuccessToast({
          show: true,
          msg: "Hey! You have to login for this feature.",
        });
      }
    } catch (err) {
      console.error(err);
    }
  }

  function addPlaylistHandler() {
    isAuth()
      ? setTriggerAddPlaylist(true)
      : setSuccessToast({
          show: true,
          msg: "Hey! You have to login for this feature.",
        });
  }

  return (
    <>
      {singleVideo ? (
        <div>
          <AddPlaylist />
          <div className="h-screen">
            {/* VIDEO PLAYER */}
            <iframe
              className="h-4/6 w-full"
              src={`https://www.youtube.com/embed/${singleVideo.id}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            {/* VIDEO DETAILS */}
            <div className="flex flex-row">
              <div className="flex flex-col gap-2 mt-2">
                <p className="text-lg font-semibold">{singleVideo.title}</p>
                <div className="flex flex-row gap-4 mt-2">
                  <img
                    src="https://raw.githubusercontent.com/surbhi84/test/master/Resources/atashinchi.jpg"
                    alt=""
                    className="rounded-full h-12"
                  />
                  <div>
                    <p className="font-semibold text-md">
                      {singleVideo.creator}
                    </p>
                    <span className="flex flex-row flex-wrap items-center text-slate-600 text-sm">
                      {singleVideo.views}
                      <span className="h-1 w-1 m-2 mb-1 bg-slate-600 rounded-full">
                        {" "}
                      </span>
                      {singleVideo.uploadedOn}
                    </span>
                  </div>
                </div>
              </div>

              {/* INTERACTIVE BUTTONS */}
              <div className="flex flex-row gap-4 mt-2 ml-auto h-8">
                <IconContext.Provider
                  value={{ className: "text-xl self-center text-gray-600" }}
                >
                  <button
                    className="flex flex-row text-lg gap-1 hover:scale-110"
                    onClick={() => {
                      likeHandler(singleVideo, like);
                    }}
                  >
                    {like ? <MdThumbUp /> : <BiLike />} Like
                  </button>
                  <button
                    className="flex flex-row text-lg gap-1 hover:scale-110"
                    onClick={dislikeHandler}
                  >
                    {dislike ? <MdThumbDown /> : <BiDislike />}Dislike
                  </button>
                  <button
                    className="flex flex-row text-lg gap-1 hover:scale-110"
                    onClick={() => {
                      watchLaterHandler(singleVideo, watchLater);
                    }}
                  >
                    {watchLater ? <MdWatchLater /> : <MdOutlineWatchLater />}
                    Watch Later
                  </button>
                  <button
                    className="flex flex-row text-lg gap-1 hover:scale-110"
                    onClick={addPlaylistHandler}
                  >
                    <RiPlayListAddLine />
                    Save
                  </button>
                </IconContext.Provider>
              </div>
            </div>

            {/* VIDEO ABOUT */}
            <p className="py-2 text-sm">{singleVideo.about}</p>
          </div>
        </div>
      ) : // </div>
      videoList.length > 0 ? (
        "error"
      ) : (
        "Loading"
      )}
    </>
  );
}
