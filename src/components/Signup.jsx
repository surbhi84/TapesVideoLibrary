import { useState } from "react";
import { GoPerson } from "react-icons/go";
import { MdVpnKey, MdEmail } from "react-icons/md";
import { HiEyeOff, HiEye } from "react-icons/hi";
import { authSignup } from "apiCalls";
import { LOGIN, useMenu, useUser } from "hooks";

export function Signup() {
  const { triggerSignup, setSuccessToast, setTriggerSignup } = useMenu();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [showPwd, setShowPwd] = useState(false);
  const [showConfirmPwd, setShowConfirmPwd] = useState(false);

  const { userDispatch } = useUser();

  async function signupHandler() {
    try {
      const response = await authSignup(name, email, password);
      userDispatch({ type: LOGIN, payload: response.data });
      setTriggerSignup(false);
      setSuccessToast({ show: true, msg: "You are Logged in!" });
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      {triggerSignup ? (
        // OUTER DIV
        <div
          className="flex flex-row items-center justify-center w-full h-screen bg-black/40 absolute"
          onClick={() => setTriggerSignup(false)}
        >
          {/* LOGIN POPUP */}
          <div
            className=" flex flex-col items-center absolute shadow-2xl bg-white rounded-lg p-6 px-10 z-1"
            onClick={(e) => e.stopPropagation()}
          >
            <label className="flex flex-col align-center gap-0.5 ">
              Name
              <div className="flex flex-row items-center gap-4 rounded-md border-black border-2 h-8 px-1 w-64">
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

            <label className="flex flex-col align-center   gap-0.5 mt-3">
              Email
              <div className="flex flex-row items-center gap-4 rounded-md border-black border-2 h-8 px-1 w-64">
                <MdEmail />
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

            <label className="flex flex-col  align-center gap-0.5 mt-3">
              Password
              <div className="flex flex-row items-center rounded-md border-black border-2 gap-4 h-8 px-1">
                <MdVpnKey />
                <input
                  type={showPwd ? "text" : "password"}
                  className="outline-none bg-white"
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

            <label className="flex flex-col  align-center gap-0.5 mt-3">
              Confirm Password
              <div className="rounded-md border-black border-2 flex flex-row items-center gap-4 h-8 px-1">
                <MdVpnKey />
                <input
                  type={showConfirmPwd ? "text" : "password"}
                  className=" outline-none bg-white"
                  value={confirmPwd}
                  onChange={(e) => {
                    setConfirmPwd(e.target.value);
                  }}
                />
                <div
                  className="ml-auto"
                  onClick={() => {
                    setShowConfirmPwd((p) => !p);
                  }}
                >
                  {showConfirmPwd ? <HiEye /> : <HiEyeOff />}
                </div>
              </div>
            </label>

            <div className="flex flex-row mt-4">
              <label>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => {
                    setIsChecked((p) => !p);
                  }}
                  className="accent-red-200"
                />{" "}
                Accept t&c
              </label>
            </div>

            <button
              className="bg-gray-200 hover:bg-gray-100 hover:text-red-700 font-bold bg-red-700 text-white shadow-md rounded-md h-8 px-4 mt-6 w-64 disabled:opacity-50 "
              onClick={signupHandler}
              disabled={
                password !== confirmPwd ||
                password === "" ||
                confirmPwd === "" ||
                !isChecked ||
                email === "" ||
                name === ""
              }
            >
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
