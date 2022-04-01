import { Routes, Route } from "react-router-dom";
import { Navbar, NestedRoutes } from "components";
import {
  Home,
  Trending,
  History,
  MyPlaylist,
  WatchLater,
  LikedVids,
  Settings,
  FullScreen,
} from "pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<NestedRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/history" element={<History />} />
          <Route path="/myplaylist" element={<MyPlaylist />} />
          <Route path="/watchlater" element={<WatchLater />} />
          <Route path="/likedvideos" element={<LikedVids />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/video" element={<FullScreen />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
