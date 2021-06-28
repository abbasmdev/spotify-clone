import { useCallback, useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import Header from "../../components/Playlist/Header";
import { spotifyInstance } from "../../spotify";
import styles from "./index.module.css";
function PlayList() {
  const [playlistData, setPlaylistData] = useState(null);
  const match = useRouteMatch();
  const playlistId = match?.params?.id;

  const fetchPlaylist = useCallback(async () => {
    try {
      const response = await spotifyInstance.getPlaylist(playlistId);
      setPlaylistData(response);
    } catch (error) {
      console.log(error);
    }
  }, [playlistId]);
  useEffect(() => {
    fetchPlaylist();
  }, [fetchPlaylist]);
  console.log("playlistData", playlistData);
  return (
    <div className={styles.container}>
      <Header playlistData={playlistData} />
    </div>
  );
}

export default PlayList;
