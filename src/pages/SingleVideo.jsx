import { useLocation, useParams } from "react-router-dom";
import { BiLike, BiDislike } from "react-icons/bi";
import { MdOutlineWatchLater } from "react-icons/md";
import { RiPlayListAddLine } from "react-icons/ri";
import { IconContext } from "react-icons";
import { useVideos } from "hooks";

export function SingleVideo() {
  const { id: videoId } = useParams();
  const { videoList } = useVideos();

  videoList;
  const singleVideo = videoList.find((vid) => vid.id === videoId);

  return (
    <>
      {singleVideo ? (
        <div>
          <div className="flex flex-col w-full h-screen mt-2">
            <div className="h-3/5 self-center gap-2 px-10">
              {/* VIDEO PLAYER */}
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${singleVideo.id}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              {/* VIDEO DETAILS */}
              <div className="flex flex-row">
                <div className="flex flex-col gap-2 mt-4">
                  <p className=" text-2xl">{singleVideo.title}</p>
                  <div className="flex flex-row gap-4 mt-4">
                    <img
                      src="https://raw.githubusercontent.com/surbhi84/test/master/Resources/atashinchi.jpg"
                      alt=""
                      className="rounded-full h-12"
                    />
                    <div>
                      <p className="font-semibold  text-xl">
                        {singleVideo.creator}
                      </p>
                      <span className="flex flex-row flex-wrap items-center text-slate-600 ">
                        {singleVideo.views}
                        <span className="h-1 w-1 m-2 mb-1 bg-slate-600 rounded-full"></span>
                        {singleVideo.uploadedOn}
                      </span>
                    </div>
                  </div>
                </div>

                {/* INTERACTIVE BUTTONS */}
                <div className="flex flex-row gap-8 mt-6 ml-auto h-8 ">
                  <IconContext.Provider
                    value={{ className: "text-2xl self-center " }}
                  >
                    <button className="flex flex-row text-xl gap-1 hover:scale-110 ">
                      <BiLike /> Like
                    </button>
                    <button className="flex flex-row text-xl gap-1 hover:scale-110">
                      <BiDislike /> Dislike
                    </button>
                    <button className="flex flex-row text-xl gap-1 hover:scale-110">
                      <MdOutlineWatchLater /> Watch Later
                    </button>
                    <button className="flex flex-row text-xl gap-1 hover:scale-110">
                      <RiPlayListAddLine />
                      Save
                    </button>
                  </IconContext.Provider>
                </div>
              </div>

              {/* VIDEO ABOUT */}
              <p className="py-2 text-lg">{singleVideo.about}</p>
            </div>
          </div>
        </div>
      ) : videoList.length > 0 ? (
        "error"
      ) : (
        "Loading"
      )}
    </>
  );
}