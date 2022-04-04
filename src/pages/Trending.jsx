import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { useUser, useVideos } from "hooks";
import { postHistory } from "apiCalls";
import { ADDHISTORY } from "hooks/reducer/userReducer/types";

export function Trending() {
  const navigate = useNavigate();
  const { videoList } = useVideos();
  const { isAuth, user, userDispatch } = useUser();
  const trendingVids = videoList.filter((vid) => vid.isTrending);

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
      console.error(err);
    }
  }

  return (
    <div className="flex flex-col flex-wrap px-8">
      <h2 className="text-2xl mt-4">Trending Videos</h2>
      <hr className="my-4 color-slate-300" />

      <div className="flex flex-row">
        {trendingVids.map(
          ({ id, title, creator, views, uploadedOn, about, img, avatar }) => (
            <div
              className="h-2/4 w-2/5 p-3"
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
              <img className="h-52 w-full " src={img}></img>

              {/* VIDEO DETAILS*/}
              <p className="font-bold mt-2">{title}</p>

              <div className="flex flex-row gap-3 mt-2">
                <img
                  src={avatar}
                  alt="creator avatar"
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
    </div>
  );
}
