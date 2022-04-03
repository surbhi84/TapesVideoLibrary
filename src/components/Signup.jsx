import { useMenu } from "hooks";
import { GoPerson } from "react-icons/go";
import { MdVpnKey } from "react-icons/md";
import { useState } from "react";

export function Signup() {
  const { triggerSignup } = useMenu();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      {triggerSignup ? (
        <div className="flex flex-row items-center justify-center w-full h-screen bg-black/40 absolute">
          <div className=" flex flex-col items-center absolute shadow-2xl bg-white rounded-lg p-10 pb-15w-2/3 md:w-2/4 xl:w-2/6">
            <label className="flex flex-col align-center gap-2 text-xl w-3/4 ">
              Name
              <div className="flex flex-row items-center gap-4 rounded-md border-black border-2 h-10 p-2">
                <GoPerson />
                <input
                  type="text"
                  className="outline-none"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
            </label>

            <label className="flex flex-col align-center gap-2 text-xl w-3/4 mt-4">
              Email
              <div className="flex flex-row items-center gap-4 rounded-md border-black border-2 h-10 p-2">
                <GoPerson />
                <input
                  type="text"
                  className="outline-none"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </label>

            <label className="flex flex-col w-3/4 align-center text-xl gap-2 mt-4">
              Password
              <div className="flex flex-row items-center gap-4 rounded-md border-black border-2 h-10 p-2">
                <MdVpnKey />
                <input
                  type="password"
                  className="outline-none bg-white"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </label>
            <label className="flex flex-col w-3/4 align-center text-xl gap-2 mt-4">
              Confirm Password
              <div className="rounded-md h-10 border-black border-2 flex flex-row items-center gap-4 p-2">
                <MdVpnKey />
                <input
                  type="password"
                  className=" outline-none bg-white"
                  value={confirmPwd}
                  onChange={(e) => {
                    setConfirmPwd(e.target.value);
                  }}
                />
              </div>
            </label>
            <div className="flex flex-row justify-between w-3/4 m-2">
              <label>
                <input type="checkbox" /> Accept terms & conditions
              </label>

              <p>Forgot password?</p>
            </div>
            <button className="bg-gray-200 hover:bg-gray-100 hover:text-red-700 font-bold bg-red-700 text-white shadow-md rounded-md h-10 px-4 w-3/4 mt-6">
              Signup
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
