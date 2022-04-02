import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { useVideos } from "hooks";

export function Trending() {
  const navigate = useNavigate();
  const { videoList } = useVideos();
  const trendingVids = videoList.filter((vid) => vid.isTrending);

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
                navigate(`/video/${id}`, {
                  state: {
                    id,
                    title,
                    creator,
                    views,
                    uploadedOn,
                    about,
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
