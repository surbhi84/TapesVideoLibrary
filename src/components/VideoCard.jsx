import { v4 as uuid } from "uuid";
export function VideoCard() {
  return (
    <div className="flex flex-row flex-wrap p-8">
      {[...Array(8)].map(() => (
        <div className="h-96 w-1/4 p-3" key={uuid()}>
          <iframe
            className="h-52 w-full "
            src="https://www.youtube.com/embed/lh4pj4meWO0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
          <p className="font-bold">
            The Tachibanas' Ochugen Season EP 113 | Atashin'chi | [ENG sub]
          </p>
          <div className="text-slate-600">
            <p>[Anime] Atashin'chi Official Channel</p>
            <span className="flex flex-row flex-wrap items-center">
              1,252,816 views
              <span className="h-1 w-1 m-2 mb-1 bg-slate-600 rounded-full"></span>
              Sep 9, 2020
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
