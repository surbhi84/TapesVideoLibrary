import { useMenu } from "hooks";
import { Link, NavLink } from "react-router-dom";

export function SliderMenu() {
  const { isMenu } = useMenu();
  const menuTabs = [
    {
      label: "Home",
      link: "/",
      icon: "/assets/icons/home.svg",
      alt: "Home icon",
    },
    {
      label: "Trending",
      link: "/trending",
      icon: "/assets/icons/trending.svg",
      alt: "Trending icon",
    },
    {
      label: "History",
      link: "history",
      icon: "/assets/icons/history.svg",
      alt: "History icon",
    },
    {
      label: "My Playlist",
      link: "myplaylist",
      icon: "/assets/icons/playlist.svg",
      alt: "Playlist icon",
    },
    {
      label: "Watch Later",
      link: "watchlater",
      icon: "/assets/icons/watch_later.svg",
      alt: "Watch Later icon",
    },
    {
      label: "Liked Videos",
      link: "likedvideos",
      icon: "/assets/icons/like.svg",
      alt: "Like icon",
    },
    {
      label: "Settings",
      link: "settings",
      icon: "/assets/icons/settings.svg",
      alt: "settings icon",
    },
  ];
  return (
    <>
      <div
        className={`min-w-max w-72 flex-col flex-wrap bg-white left-0 min-h ease-in-out duration-300 ${
          isMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {menuTabs.map(({ label, link, icon, alt }) => {
          return (
            <NavLink to={link}>
              {({ isActive }) => (
                <>
                  <div key="label">
                    <span
                      className={`flex flex-row px-10 py-3 font-medium text-xl gap-10 items-center hover:bg-gray-200 ${
                        isActive ? "bg-gray-200" : ""
                      }`}
                    >
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
              )}
            </NavLink>
          );
        })}
      </div>
    </>
  );
}
