import { LOGOUT, useMenu, useUser } from "hooks";
import { Link, useNavigate } from "react-router-dom";

export function Navbar() {
  const { setIsMenu, setTriggerLogin, setTriggerSignup, setSuccessToast } =
    useMenu();
  const { userDispatch, isAuth } = useUser();
  const navigate = useNavigate();

  async function logoutHandler() {
    try {
      userDispatch({ type: LOGOUT });
      navigate("/");
      setTriggerLogin(false);
      setSuccessToast({ show: true, msg: "You are Logged out!" });
    } catch (err) {
      setSuccessToast({ show: true, msg: "Something went wrong" });
    }
  }

  return (
    <>
      {/* MAIN HEADER DIV */}
      <div className="flex flex-row px-3 py-1 md:px-6 md:py-3 items-center">
        <img
          src="/assets/icons/menu.svg"
          alt="menu"
          className="hover:bg-gray-200 rounded-full p-1 h-6 md:h-8"
          onClick={() => {
            setIsMenu((p) => !p);
          }}
        />
        {/* INNER HEADER DIV */}
        <div className=" flex flex-row w-full justify-between items-center">
          {/* LOGO */}
          <Link to="/">
            <div className="flex flex-row pl-3 md:pl-5 ">
              <img src="/assets/logo.svg" className="h-6 md:h-7 color-red" />
              <h1 className="font-bold text-xl md:text-2xl pl-1 text-red-700 font-sans">
                Tapes
              </h1>
            </div>
          </Link>
          {/* SEARCH BAR */}
          <div className="flex flex-row bg-white rounded md:p-0.5 border border-slate-300 w-2/5 xs:visible invisible ">
            <input
              type="search"
              placeholder="search"
              className="w-full p-0.5 md:p-1 outline-none text-sm"
            />
            <button className="bg-white md:scale-105 hover:scale-110 pr-1">
              <img src="/assets/icons/search.svg" alt="search" />
            </button>
          </div>
          {/* LOGIN BUTTON*/}

          {isAuth() ? (
            <button
              className="bg-gray-200 hover:bg-gray-100 font-bold text-sm md:text-base text-red-700 rounded h-6 px-2 md:h-8 md:px-4"
              onClick={logoutHandler}
            >
              Logout
            </button>
          ) : (
            <button
              className="bg-gray-200 hover:bg-gray-100 font-bold text-sm md:text-base text-red-700 rounded h-6 px-2 md:h-8 md:px-4"
              onClick={() => {
                setTriggerLogin((p) => !p);
                setTriggerSignup(false);
              }}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </>
  );
}
