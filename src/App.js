import { Routes, Route, Link } from "react-router-dom";
import Mockman from "mockman-js";
import { Navbar, NestedRoutes, Login, Signup, SuccessToast } from "components";
import {
  Home,
  Trending,
  History,
  MyPlaylist,
  WatchLater,
  LikedVids,
  Settings,
  SingleVideo,
} from "pages";
import { useMenu } from "hooks";

function App() {
  const { successToast } = useMenu();

  return (
    <div className="App font-Lato">
      <Navbar />
      <Login />
      <Signup />
      {/* SUCCESS_TOAST ONLY APPEARS IF THERE'S A SUCCESS MESSAGE TO SHOW */}
      {successToast.show && <SuccessToast />}
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
          <Route path="/video/:id" element={<SingleVideo />} />
          <Route path="/ts" element={<Mockman />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
