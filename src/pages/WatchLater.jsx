import { useVideos } from "hooks";
export function WatchLater() {
  const { videoList } = useVideos();
  return (
    <div className="flex flex-col flex-wrap px-8">
      <h2 className="text-lg font-semibold text-gray-700 mt-4">Watch Later </h2>
      <hr className="my-1 color-slate-300" />
      <div className="flex flex-row flex-wrap p-8">
        {videoList.map(
          ({ id, title, creator, views, uploadedOn, about, img, avatar }) => (
            // VIDEOCARD
            <div
              className="h-96 w-1/4 p-3"
              key={id}
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
    </div>
  );
}
