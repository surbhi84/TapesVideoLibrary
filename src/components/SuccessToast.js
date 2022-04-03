import { useEffect } from "react";
import { useMenu } from "hooks";

export function SuccessToast() {
  const { successToast, setSuccessToast } = useMenu();

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccessToast({ show: false, msg: "" });
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [successToast]);

  return (
    <>
      {successToast.show === true ? (
        <div className="flex flex-row items-center justify-center bg-black/40 absolute w-full h-screen">
          <div className="flex flex-row items-center justify-center absolute bg-white shadow-lg text-xl rounded-lg border-2 border-red-700 w-80 h-16">
            {successToast.msg}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
