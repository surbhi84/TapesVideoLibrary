import { useMenu } from "hooks";
import { SliderMenu } from "components";
import { Outlet } from "react-router-dom";

export function NestedRoutes() {
  const { isMenu, triggerLogin, triggerSignup } = useMenu();
  return (
    <div className="flex flex-row">
      <SliderMenu />
      <div className="w-4/5 m-auto">
        <Outlet />
      </div>
    </div>
  );
}
