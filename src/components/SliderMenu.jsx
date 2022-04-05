import { useMenu } from "hooks";
import { NavLink, Link } from "react-router-dom";

export function SliderMenu() {
  const { isMenu, setIsMenu } = useMenu();
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
      {isMenu && (
        <div
          className="bg-black/40 absolute h-full w-full"
          onClick={() => {
            setIsMenu(false);
          }}
        >
          {" "}
          {isMenu && (
            <div
              className={`min-w-max flex-col flex-wrap bg-white h-screen absolute ease-in-out duration-300 ${
                isMenu ? "translate-x-0 " : "-translate-x-full"
              }`}
            >
              {/* LOGO DIV MIGHT IMPLEMENT IN FUTURE */}
              {/* <div className="flex flex-row p-6 pl-5">
          <img
            src="/assets/icons/menu.svg"
            alt="menu"
            className="scale-110 hover:bg-gray-200 rounded-full p-1"
            onClick={() => {
              setIsMenu((p) => !p);
            }}
          /> */}
              {/*  LOGO */}
              {/* <Link to="/">
            <div className="flex flex-row pl-6 ">
              <img src="/assets/logo.svg" className="w-8 color-red" />
              <h1 className="font-bold text-3xl pl-1 text-red-700 font-sans">
                Tapes
              </h1>
            </div>
          </Link>
        </div> */}

              {menuTabs.map(({ label, link, icon, alt }) => {
                return (
                  <NavLink to={link} key={label}>
                    {({ isActive }) => (
                      <>
                        <div>
                          <span
                            className={`flex flex-row pl-6 pr-12 py-3 font-medium text-slate-800 text-md gap-7 items-center hover:bg-gray-200 ${
                              isActive ? "bg-gray-200" : ""
                            }`}
                          >
                            <img src={icon} alt={alt} />
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
          )}
        </div>
      )}
    </>
  );
}
