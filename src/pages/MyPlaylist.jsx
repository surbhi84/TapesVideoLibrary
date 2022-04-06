import { list } from "postcss";
import { MdDelete } from "react-icons/md";

export function MyPlaylist() {
  const playlist = [
    { name: "playlist1", list: [12, 3, 3] },
    { name: "playlist2", list: [1, 2, 3, 4, 4, 4] },
  ];
  // const playlist = [];
  return (
    <>
      <div className="flex flex-col flex-wrap px-8">
        <h2 className="text-lg font-semibold text-gray-700 mt-4">
          My Playlist{" "}
        </h2>
        <hr className="my-1 color-slate-300" />
      </div>

      {playlist.length > 0 ? (
        <div className="grid grid-cols-auto-fit justify-center">
          {playlist.map((i) => (
            <div className=" flex flex-row p-3 items-center w-64 h-16 shadow-md m-4 rounded-sm text-md hover:scale-105">
              <div>
                {i.name}
                <div className="text-slate-600 text-xs self-end">
                  {i.list.length} videos
                </div>
              </div>

              <div className="text-xl ml-auto mt-auto hover:scale-105 text-red-700">
                <MdDelete />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center mt-4 ">
          <img
            src="./assets/images/watch.svg"
            alt="home cinema"
            className="w-1/4"
          />
          <p className="text-md p-2">
            Login and start adding videos to playlist.
          </p>
        </div>
      )}
    </>
  );
}
