export function SliderMenu({ isMenu }) {
  const menuTabs = [
    {
      label: "Home",
      link: "",
      icon: "/assets/icons/home.svg",
      alt: "Home icon",
    },
    {
      label: "Trending",
      link: "",
      icon: "/assets/icons/trending.svg",
      alt: "Trending icon",
    },
    {
      label: "History",
      link: "",
      icon: "/assets/icons/history.svg",
      alt: "History icon",
    },
    {
      label: "My Playlist",
      link: "",
      icon: "/assets/icons/playlist.svg",
      alt: "Playlist icon",
    },
    {
      label: "Watch Later",
      link: "",
      icon: "/assets/icons/watch_later.svg",
      alt: "Watch Later icon",
    },
    {
      label: "Liked Videos",
      link: "",
      icon: "/assets/icons/like.svg",
      alt: "Like icon",
    },
    {
      label: "Settings",
      link: "",
      icon: "/assets/icons/settings.svg",
      alt: "settings icon",
    },
  ];
  return (
    <>
      <div
        className={`w-72 flex-col flex-wrap bg-white left-0 fixed min-h ease-in-out duration-300 ${
          isMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {menuTabs.map(({ label, link, icon, alt }) => {
          return (
            <>
              <div key="label">
                <span className="flex flex-row px-10 py-3 font-medium text-xl gap-10 items-center hover:bg-gray-100 ">
                  <img src={icon} alt={alt} className="scale-110" />
                  <p> {label} </p>
                </span>
              </div>
              {label === "History" || label === "Liked Videos" ? (
                <hr className="m-4 color-slate-300" />
              ) : (
                ""
              )}
            </>
          );
        })}
      </div>
    </>
  );
}
