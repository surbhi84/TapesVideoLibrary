import axios from "axios";

export function getVideos() {
  return axios.get("/api/videos");
}
