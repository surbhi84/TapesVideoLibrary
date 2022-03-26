export function Navbar() {
  return (
    <>
      {/* MAIN HEADER DIV gradient= bg-gradient-to-r from-white to-rose-300 */}
      <div className="flex flex-row pr-10 pl-1 py-6 items-center">
        <img
          src="/assets/icons/menu.svg"
          alt="menu"
          className="p-2 scale-110 hover:bg-gray-100 rounded-full"
        />
        {/* INNER HEADER DIV */}
        <div className=" flex flex-row w-full justify-between items-center">
          {/* LOGO */}
          <div className="flex flex-row pl-3 ">
            <img src="/assets/logo.svg" className="w-9 color-red" />
            <h1 className="font-bold text-4xl pl-1 text-red-700 font-sans">
              Tapes
            </h1>
          </div>
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
