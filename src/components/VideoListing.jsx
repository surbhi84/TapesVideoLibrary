import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { useVideos, useUser } from "hooks";
import { postHistory } from "apiCalls";
import { ADDHISTORY } from "hooks/reducer/userReducer/types";

export function VideoListing() {
  const navigate = useNavigate();
  const { videoList } = useVideos();
  const { isAuth, user, userDispatch } = useUser();

  async function videoCardOnClickHandler({ video }) {
    try {
      navigate(`/video/${video.id}`, {
        state: video.id,
      });
      if (isAuth()) {
        await postHistory(video, user.encodedToken);
        userDispatch({ type: ADDHISTORY, payload: video });
      }
    } catch (err) {
      setSuccessToast({ show: true, msg: "Something went wrong" });
    }
  }

  return (
    <div className="grid grid-cols-auto-fit justify-center">
      {videoList.map(
        ({ id, title, creator, views, uploadedOn, about, img, avatar }) => (
          // VIDEOCARD
          <div
            className="h-72 w-72 p-3 m-1"
            key={uuid()}
            onClick={() => {
              videoCardOnClickHandler({
                video: {
                  id,
                  title,
                  creator,
                  views,
                  uploadedOn,
                  about,
                  img,
                  avatar,
                },
              });
            }}
          >
            {/* VIDEO */}
            <img src={img} loading="lazy" />

            <div className="flex flex-row gap-3 mt-3">
              <img
                src={avatar}
                alt="creator_avatar"
                className="rounded-full h-10"
              />

              <div>
                {/* VIDEO DETAILS*/}
                <p className="font-semibold text-sm mb-0.5">
                  {title.slice(0, 55)}...
                </p>
                <div className="font-medium text-gray-600 text-xs mb-0.5">
                  <p>{creator}</p>
                  <span className="flex flex-row flex-wrap items-center ">
                    {views}
                    <span className="h-1 w-1 m-2 mb-1 bg-slate-600 rounded-full"></span>
                    {uploadedOn}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
