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
      console.error(err);
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
            className="flex flex-col items-center absolute shadow-2xl bg-white rounded-lg p-6 px-10 z-1 "
            onClick={(e) => e.stopPropagation()}
          >
            <label className="flex flex-col align-center gap-0.5">
              Email
              <div className="rounded-md border-black border-2 flex flex-row items-center gap-2 h-8 px-1 w-64">
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

            <label className="flex flex-col align-center gap-0.5 mt-6">
              Password
              <div className="rounded-md border-black border-2 flex flex-row items-center gap-4 h-8 px-1 ">
                <MdVpnKey />
                <input
                  type={showPwd ? "text" : "password"}
                  className=" outline-none bg-white"
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

            <div className="flex flex-row justify-between w-64 mt-1">
              <label>
                <input type="checkbox" className="accent-red-200" /> Remember me
              </label>
            </div>

            <button
              className="bg-gray-200 hover:bg-gray-100 hover:text-red-700 font-bold bg-red-700 text-white shadow-md rounded-md h-8 px-4 mt-6 w-64 disabled:opacity-50 "
              onClick={loginHandler}
              disabled={password === "" || email === ""}
            >
              Login
            </button>
            <button
              className=" font-bold text-red-700 rounded-md h-10 px-4 mt-2 decoration-solid hover:scale-110"
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
