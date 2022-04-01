import { createContext } from "react";
import { useContext, useEffect, useState } from "react";
import { getVideos } from "apiCalls";

const VideoContext = createContext();

export function VideoProvider({ children }) {
  const [error, setError] = useState("");
  const [videoList, setVideoList] = useState([]);

  async function getInitialVideoList() {
    try {
      const response = await getVideos();
      return response.data.videos;
    } catch (err) {
      setError(err);
      return [];
    }
  }

  useEffect(() => {
    (async () => {
      const initialVideoList = await getInitialVideoList();
      setVideoList(initialVideoList);
    })();
  }, []);

  return (
    <VideoContext.Provider value={{ videoList, setVideoList }}>
      {children}
    </VideoContext.Provider>
  );
}

export const useVideos = () => useContext(VideoContext);
