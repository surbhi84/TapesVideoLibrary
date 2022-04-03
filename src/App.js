import { Routes, Route, Link } from "react-router-dom";
import { Navbar, NestedRoutes, Login, Signup } from "components";
import Mockman from "mockman-js";
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
      <Login />
      <Signup />
      <Link to="/ts">MockMan</Link>
      <Routes>
        <Route path="/" element={<NestedRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/history" element={<History />} />
          <Route path="/myplaylist" element={<MyPlaylist />} />
          <Route path="/watchlater" element={<WatchLater />} />
          <Route path="/likedvideos" element={<LikedVids />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/video/:id" element={<FullScreen />} />
          <Route path="/ts" element={<Mockman />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
