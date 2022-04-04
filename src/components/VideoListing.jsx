import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { useVideos, useUser } from "hooks";
import { postHistory } from "apiCalls";
import { ADDHISTORY } from "hooks/reducer/userReducer/types";

export function VideoListing() {
  const navigate = useNavigate();
  const { videoList } = useVideos();
  const { user, userDispatch } = useUser();

  async function videoCardOnClickHandler({ video }) {
    try {
      await postHistory(video, user.encodedToken);
      userDispatch({ type: ADDHISTORY, payload: video });
      navigate(`/video/${video.id}`, {
        state: video.id,
      });
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="flex flex-row flex-wrap p-8">
      {videoList.map(
        ({ id, title, creator, views, uploadedOn, about, img, avatar }) => (
          // VIDEOCARD
          <div
            className="h-96 w-1/4 p-3"
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

            <img src={img} className="h-52 w-full " loading="lazy" />

            {/* VIDEO DETAILS*/}
            <p className="font-bold mt-2">{title}</p>

            <div className="flex flex-row gap-3 mt-2">
              <img
                src={avatar}
                alt="creator_avatar"
                className="rounded-full h-10"
              />

              <div className="text-slate-600">
                <p>{creator}</p>
                <span className="flex flex-row flex-wrap items-center">
                  {views}
                  <span className="h-1 w-1 m-2 mb-1 bg-slate-600 rounded-full"></span>
                  {uploadedOn}
                </span>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
