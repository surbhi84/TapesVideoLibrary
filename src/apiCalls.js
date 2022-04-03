import axios from "axios";

export function getVideos() {
  return axios.get("/api/videos");
}

export function authLogin(email, password) {
  return axios.post("/api/auth/login", { email, password });
}
