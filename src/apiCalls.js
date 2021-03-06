import axios from "axios";

export function getVideos() {
  return axios.get("/api/videos");
}

// USER AUTH RELATED API CALLS

export function authLogin(email, password) {
  return axios.post("/api/auth/login", { email, password });
}

export function authSignup({ name, email, password }) {
  return axios.post("/api/auth/signup", {
    name,
    email,
    password,
  });
}

// HISTORY RELATED API CALLS

export function getHistory(encodedToken) {
  return axios.get("/api/user/history", {
    headers: { authorization: encodedToken },
  });
}

export function postHistory(video, encodedToken) {
  return axios.post(
    "/api/user/history",
    { video },
    { headers: { authorization: encodedToken } }
  );
}

export function deleteHistory(id, encodedToken) {
  return axios.delete("/api/user/history/" + id, {
    headers: { authorization: encodedToken },
  });
}

export function deleteAllHistory() {
  return axios.delete("/api/user/history/all");
}

// LIKES MANAGING API'S

export function postLike(video, encodedToken) {
  return axios.post(
    "/api/user/likes/",
    { video },
    { headers: { authorization: encodedToken } }
  );
}

export function deleteLike(id, encodedToken) {
  return axios.delete("/api/user/likes/" + id, {
    headers: { authorization: encodedToken },
  });
}

// WATCHLATER RELATED API CALLS

export function postWatchLater(video, encodedToken) {
  return axios.post(
    "/api/user/watchlater/",
    { video },
    { headers: { authorization: encodedToken } }
  );
}

export function deleteWatchLater(id, encodedToken) {
  return axios.delete("/api/user/watchlater/" + id, {
    headers: { authorization: encodedToken },
  });
}

// PLAYLIST RELATED API'S

export function getPlaylists(encodedToken) {
  return axios.get("/api/user/playlists", {
    headers: { authorization: encodedToken },
  });
}

export function postPlaylist(playlist, encodedToken) {
  return axios.post("/api/user/playlists", playlist, {
    headers: { authorization: encodedToken },
  });
}

export function deletePlaylist(id, encodedToken) {
  return axios.delete("/api/user/playlists/" + id, {
    headers: { authorization: encodedToken },
  });
}

// managing videos of playlists

export function getPlaylistVideos(id, encodedToken) {
  return axios.get("/user/playlists/" + id, {
    headers: { authorization: encodedToken },
  });
}

export function postPlaylistVideo(video, playlistId, encodedToken) {
  return axios.post(
    "/api/user/playlists/" + playlistId,
    { video },
    {
      headers: { authorization: encodedToken },
    }
  );
}

export function deletePlaylistVideo(videoId, playlistId, encodedToken) {
  return axios.delete("/api/user/playlists/" + playlistId + "/" + videoId, {
    headers: { authorization: encodedToken },
  });
}
