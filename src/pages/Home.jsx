import { Navbar, VideoCard, SliderMenu } from "components";
import { useState } from "react";
export function Home() {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <div className="relative">
      <Navbar setIsMenu={setIsMenu} />
      {isMenu && <SliderMenu />}
      <VideoCard />
    </div>
  );
}
