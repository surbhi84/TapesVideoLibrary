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
