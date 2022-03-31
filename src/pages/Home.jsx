import { Navbar, VideoCard, SliderMenu } from "components";
import { useState } from "react";
export function Home() {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <div
      className="relative"
      onScroll={() => {
        console.log("scrolling");
        setIsMenu(false);
      }}
    >
      <Navbar setIsMenu={setIsMenu} />
      <SliderMenu isMenu={isMenu} />
      <VideoCard />
    </div>
  );
}
