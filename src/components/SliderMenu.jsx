export function SliderMenu() {
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
      <div className="w-80 flex-col flex-wrap bg-white absolute delay-300">
        {menuTabs.map(({ label, link, icon, alt }) => {
          return (
            <>
              <div key="label">
                <span className="flex flex-row px-10 py-3 font-semibold text-xl gap-10 items-center hover:bg-gray-100 ">
                  <img src={icon} alt={alt} className="scale-110" />
                  <p> {label} </p>
                </span>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
