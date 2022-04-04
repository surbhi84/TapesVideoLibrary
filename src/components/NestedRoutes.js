import { useMenu } from "hooks";
import { SliderMenu } from "components";
import { Outlet } from "react-router-dom";

export function NestedRoutes() {
  const { isMenu } = useMenu();
  return (
    <div className="flex flex-row ">
      {isMenu && <SliderMenu />}
      <div className={isMenu ? `pr-4 md:pr-20` : `px-4 md:px-20`}>
        <Outlet />
      </div>
    </div>
  );
}
