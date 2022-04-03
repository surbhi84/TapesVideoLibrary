import { useMenu } from "hooks";
import { GoPerson } from "react-icons/go";
import { MdVpnKey } from "react-icons/md";
import { useState } from "react";
export function Login() {
  const { triggerLogin, setTriggerSignup, setTriggerLogin } = useMenu();

  const [email, setEmail] = useState("adarshbalika@gmail.com");
  const [password, setPassword] = useState("adarshBalika123");

  function loginHandler() {}

  return (
    <>
      {triggerLogin ? (
        <div className="w-full h-screen bg-black/40 absolute flex flex-row items-center justify-center">
          <div className="bg-white rounded-lg  p-10 flex flex-col items-center  absolute shadow-2xl w-2/3 md:w-2/4 xl:w-2/6">
            <label className="flex flex-col w-3/4 align-center text-xl gap-2 ">
              Email
              <div className="rounded-md h-10 border-black border-2 flex flex-row items-center gap-4 p-2">
                <GoPerson />
                <input
                  type="text"
                  className=" outline-none"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </label>

            <label className="flex flex-col w-3/4 align-center text-xl gap-2 mt-6">
              Password
              <div className="rounded-md h-10 border-black border-2 flex flex-row items-center gap-4 p-2">
                <MdVpnKey />
                <input
                  type="password"
                  className=" outline-none bg-white"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </label>
            <div className="flex flex-row justify-between w-3/4 m-2">
              <label>
                <input type="checkbox" /> Remember me
              </label>

              <p>Forgot password?</p>
            </div>
            <button
              className="bg-gray-200 hover:bg-gray-100 hover:text-red-700 font-bold bg-red-700 text-white shadow-md rounded-md h-10 px-4 w-3/4 mt-6"
              onClick={loginHandler}
            >
              Login
            </button>
            <button
              className=" font-bold text-red-700 rounded-md h-10 px-4 w-2/4 mt-2 decoration-solid hover:scale-110"
              onClick={() => {
                setTriggerSignup(true);
                setTriggerLogin((p) => !p);
              }}
            >
              or Signup ?
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
