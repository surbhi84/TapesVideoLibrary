import { useNavigate } from "react-router-dom";
import { useUser, useVideos } from "hooks";

import { v4 as uuid } from "uuid";
import { deleteHistory } from "apiCalls";
import { DELHISTORY } from "hooks/reducer/userReducer/types";

export function History() {
  const navigate = useNavigate();

  const {
    user: {
      user: { history },
      encodedToken,
    },
    userDispatch,
  } = useUser();

  function removeHistoryHandler(id) {
    const response = deleteHistory(id, encodedToken);
    userDispatch({ type: DELHISTORY, payload: id });
  }

  return (
    <div className="flex flex-col flex-wrap px-8">
      <h2 className="text-lg font-semibold text-gray-700  mt-4">
        Watch History
      </h2>
      <hr className="my-1 color-slate-300" />

      <div className="flex flex-col  ">
        {history.map(
          ({ id, title, creator, views, uploadedOn, img, avatar, about }) => (
            // VIDEOCARD
            <div
              className=" flex flex-row items-center shadow-lg text-lg hover:bg-gray-100 gap-10 p-3 "
              key={uuid()}
              onClick={() => {
                navigate(`/video/${id}`, {
                  state: id,
                });
              }}
            >
              {/* VIDEO THUMBNAIL*/}
              <img src={img} className="h-48 w-64 " loading="lazy" />

              <div>
                {/* VIDEO DETAILS*/}

                <p className="font-bold mt-2">{title}</p>

                {/* Div containing avatar,grey text,about,button */}
                <div className="flex flex-col gap-2 mt-2">
                  {/* Div containing grey text and avatar */}
                  <div className="flex flex-row gap-6">
                    <img
                      src={avatar}
                      alt="creator_avatar"
                      className="rounded-full h-10"
                    />

                    {/* GREY TEXT DIV */}
                    <div className="text-slate-600">
                      <p>{creator}</p>
                      <span className="flex flex-row flex-wrap items-center">
                        {views}
                        <span className="h-1 w-1 m-2 mb-1 bg-slate-600 rounded-full"></span>
                        {uploadedOn}
                      </span>
                    </div>
                  </div>

                  {/* ABOUT OF VIDEO */}
                  <p className="py-2 text-lg ">{about.slice(0, 200)}...</p>

                  <button
                    className="px-2 py-1 bg-gray-100 rounded-md hover:text-red-700 hover:bg-white self-end"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeHistoryHandler(id);
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
