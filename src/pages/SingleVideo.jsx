import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { BiLike, BiDislike } from "react-icons/bi";
import { MdOutlineWatchLater, MdThumbUp } from "react-icons/md";
import { RiPlayListAddLine } from "react-icons/ri";
import { IconContext } from "react-icons";
import { useVideos, useUser, useMenu } from "hooks";
import { postLike } from "apiCalls";

export function SingleVideo() {
  const { id: videoId } = useParams();
  const { videoList } = useVideos();
  const { setSuccessToast } = useMenu();
  const [like, setLiked] = useState(false);
  const {
    user: { encodedToken },
    isAuth,
  } = useUser();

  const singleVideo = videoList.find((vid) => vid.id === videoId);

  async function likeHandler(video) {
    await postLike(video, encodedToken);
    if (isAuth()) setLiked(true);
    else {
      setSuccessToast({
        show: true,
        msg: "Hey! You have to login for this feature.",
      });
    }
  }

  console.log(encodedToken);
  return (
    <>
      {singleVideo ? (
        <div>
          {/* <div className="flex flex-col w-full h-screen mt-2"> */}
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
                      <span className="h-1 w-1 m-2 mb-1 bg-slate-600 rounded-full"></span>
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
                      likeHandler(singleVideo);
                    }}
                  >
                    {like ? <MdThumbUp /> : <BiLike />} Like
                  </button>
                  <button className="flex flex-row text-lg gap-1 hover:scale-110">
                    <BiDislike /> Dislike
                  </button>
                  <button className="flex flex-row text-lg gap-1 hover:scale-110">
                    <MdOutlineWatchLater /> Watch Later
                  </button>
                  <button className="flex flex-row text-lg gap-1 hover:scale-110">
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
