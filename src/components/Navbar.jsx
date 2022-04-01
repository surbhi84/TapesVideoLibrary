import { useMenu } from "hooks";
import { Link } from "react-router-dom";

export function Navbar() {
  const { setIsMenu } = useMenu();
  return (
    <>
      {/* MAIN HEADER DIV gradient= bg-gradient-to-r from-white to-rose-300 */}
      <div className="flex flex-row px-10 py-6 items-center">
        <img
          src="/assets/icons/menu.svg"
          alt="menu"
          className="scale-110 hover:bg-gray-200 rounded-full p-1"
          onClick={() => {
            setIsMenu((p) => !p);
          }}
        />
        {/* INNER HEADER DIV */}
        <div className=" flex flex-row w-full justify-between items-center">
          {/* LOGO */}
          <Link to="/">
            <div className="flex flex-row pl-10 ">
              <img src="/assets/logo.svg" className="w-9 color-red" />
              <h1 className="font-bold text-4xl pl-1 text-red-700 font-sans">
                Tapes
              </h1>
            </div>
          </Link>
          {/* SEARCH BAR */}
          <div className="flex flex-row bg-white rounded p-1 border border-slate-300 w-2/5  ">
            <input
              type="search"
              placeholder="search"
              className="w-full p-1 outline-none"
            />
            <button className="bg-white scale-105 hover:scale-110 pr-1">
              <img src="/assets/icons/search.svg" alt="search" />
            </button>
          </div>
          {/* LOGIN BUTTON*/}
          <button className="bg-gray-200 hover:bg-gray-100 font-bold text-red-700 rounded h-10 px-4  ">
            Login
          </button>
        </div>
      </div>
    </>
  );
}
