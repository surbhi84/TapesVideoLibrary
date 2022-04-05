import { useMenu } from "hooks";
import { SliderMenu } from "components";
import { Outlet } from "react-router-dom";

export function NestedRoutes() {
  const { isMenu, triggerLogin, triggerSignup } = useMenu();
  return (
    <>
      <SliderMenu />
      <div className="w-11/12 m-auto md:w-10/12">
        <Outlet />
      </div>
    </>
  );
}
