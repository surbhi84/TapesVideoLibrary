import axios from "axios";

export function getVideos() {
  return axios.get("/api/videos");
}

// USER RELATED API'S

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
