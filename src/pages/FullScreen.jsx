import { BiLike, BiDislike } from "react-icons/bi";
import { MdOutlineWatchLater, MdPlaylistAdd } from "react-icons/md";
import { RiPlayListAddLine } from "react-icons/ri";
import { IconContext } from "react-icons";

export function FullScreen() {
  return (
    <>
      <div>
        <div className="flex flex-col w-full h-screen mt-2">
          <div className="h-3/5 self-center gap-2 px-10">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/lh4pj4meWO0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            <div className="flex flex-row">
              <div className="flex flex-col gap-2 mt-4">
                <p className=" text-2xl">
                  The Tachibanas' Ochugen Season EP 113 | Atashin'chi | [ENG
                  sub]
                </p>
                <div className="flex flex-row gap-4 mt-4">
                  <img
                    src="https://raw.githubusercontent.com/surbhi84/test/master/Resources/atashinchi.jpg"
                    alt=""
                    className="rounded-full h-12"
                  />
                  <div>
                    <p className="font-semibold  text-xl">
                      [Anime] Atashin'chi Official Channel
                    </p>
                    <span className="flex flex-row flex-wrap items-center text-slate-600 ">
                      1,252,816 views
                      <span className="h-1 w-1 m-2 mb-1 bg-slate-600 rounded-full"></span>
                      Sep 9, 2020
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-8 mt-6 ml-auto h-8">
                <IconContext.Provider
                  value={{ className: "text-2xl self-center" }}
                >
                  <button className="flex flex-row text-xl gap-1 ">
                    <BiLike /> Like
                  </button>
                  <button className="flex flex-row text-xl gap-1 ">
                    <BiDislike /> Dislike
                  </button>
                  <button className="flex flex-row text-xl gap-1 ">
                    <MdOutlineWatchLater /> Watch Later
                  </button>
                  <button className="flex flex-row text-xl gap-1 ">
                    <RiPlayListAddLine />
                    Save
                  </button>
                </IconContext.Provider>
              </div>
            </div>
            <p className="py-2 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel natus
              necessitatibus fugit iusto, ipsum tempore magnam consequuntur,
              explicabo, dignissimos nostrum reiciendis. Obcaecati iure cumque
              sunt dolorem dignissimos totam voluptates optio reiciendis
              repellendus sint fugiat quos, ab deserunt quam nam architecto!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
