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
          className="w-full h-screen bg-black/40 absolute flex flex-row items-center justify-center"
          onClick={() => setTriggerLogin(false)}
        >
          <div
            className="bg-white rounded-lg  p-10 flex flex-col items-center  absolute shadow-2xl w-2/3 md:w-2/4 xl:w-2/6"
            onClick={(e) => e.stopPropagation()}
          >
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

            <div className="flex flex-row justify-between w-3/4 m-2">
              <label>
                <input type="checkbox" className="accent-red-200" /> Remember me
              </label>
              <p>Forgot password?</p>
            </div>

            <button
              className="bg-gray-200 hover:bg-gray-100 hover:text-red-700 font-bold bg-red-700 text-white shadow-md rounded-md h-10 px-4 w-3/4 mt-6  disabled:opacity-50 "
              onClick={loginHandler}
              disabled={password === "" || email === ""}
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
