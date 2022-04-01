import { VideoCard, SliderMenu } from "components";
import { useMenu } from "hooks";

export function Home() {
  const { isMenu } = useMenu();
  return (
    <div className="flex flex-row">
      {isMenu && <SliderMenu />}
      <VideoCard />
    </div>
  );
}
