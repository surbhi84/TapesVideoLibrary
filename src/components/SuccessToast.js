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
  }, []);

  return (
    <>
      {successToast.show === true && (
        <div
          className="flex flex-row items-center justify-center absolute self-center right-0 top-20 bg-white shadow-lg text-md text-center rounded-lg border-2 border-red-700 px-10 h-10   animate-bounce ease"
          onClick={(e) => e.stopPropagation()}
        >
          {successToast.msg}
        </div>
      )}
    </>
  );
}
