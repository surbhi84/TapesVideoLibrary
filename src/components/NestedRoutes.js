import { useMenu } from "hooks";
import { SliderMenu } from "components";
import { Outlet } from "react-router-dom";

export function NestedRoutes() {
  const { isMenu } = useMenu();
  return (
    <div className="flex flex-row">
      {isMenu && <SliderMenu />}
      <Outlet />
    </div>
  );
}
