import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoPerson } from "react-icons/go";
import { MdVpnKey } from "react-icons/md";
import { HiEyeOff, HiEye } from "react-icons/hi";
import { authLogin } from "apiCalls";
import { LOGIN, useMenu, useUser } from "hooks";

export function Login() {
  const { triggerLogin, setTriggerSignup, setTriggerLogin, setSuccessToast } =
    useMenu();
  const { user, userDispatch } = useUser();

  const navigate = useNavigate();
  const [email, setEmail] = useState("adarshbalika@gmail.com");
  const [password, setPassword] = useState("adarshBalika123");
  const [showPwd, setShowPwd] = useState(false);

  async function loginHandler() {
    try {
      const response = await authLogin(email, password);
      userDispatch({ type: LOGIN, payload: response.data });
      navigate("/");
      setTriggerLogin(false);
      setSuccessToast({ show: true, msg: "You are Logged in!" });
    } catch (err) {
      setSuccessToast({ show: true, msg: "Something went wrong" });
    }
  }

  return (
    <>
      {triggerLogin ? (
        <div
          className="flex flex-row items-center justify-center bg-black/40 fixed w-full h-screen p-2 inset-0 overflow-hidden"
          onClick={() => setTriggerLogin(false)}
        >
          <div
            className="flex flex-col items-center absolute shadow-2xl bg-white rounded-lg py-3 px-4 md:p-6 md:px-10 z-1 text-sm md:text-md "
            onClick={(e) => e.stopPropagation()}
          >
            <label className="flex flex-col align-center gap-0.5">
              Email
              <div className="rounded-md border-black border-2 flex flex-row items-center gap-2 px-1 h-6 w-48 md:h-8 md:w-64 overflow-hidden">
                <GoPerson />
                <input
                  type="text"
                  className=" outline-none w-full"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </label>

            <label className="flex flex-col align-center gap-0.5 mt-4">
              Password
              <div className="rounded-md border-black border-2 flex flex-row items-center gap-2 px-1 h-6 w-48 md:h-8 md:w-64 overflow-hidden">
                <MdVpnKey />
                <input
                  type={showPwd ? "text" : "password"}
                  className=" outline-none bg-white w-full"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <div
                  className="ml-auto"
                  onClick={() => {
                    setShowPwd((p) => !p);
                  }}
                >
                  {showPwd ? <HiEye /> : <HiEyeOff />}
                </div>
              </div>
            </label>

            <div className="flex flex-row justify-between md:w-64 mt-1 ">
              <label>
                <input type="checkbox" className="accent-red-200" /> Remember me
              </label>
            </div>

            <button
              className="bg-gray-200 hover:bg-gray-100 hover:text-red-700 font-bold bg-red-700 text-white shadow-md rounded-md md:h-8 md:px-4 h-6 px-6 mt-4 md:w-64 disabled:opacity-50 "
              onClick={loginHandler}
              disabled={password === "" || email === ""}
            >
              Login
            </button>
            <button
              className=" font-bold text-red-700 rounded-md md:h-10 md:px-4 h-6 px-2 mt-2 decoration-solid hover:scale-110"
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
