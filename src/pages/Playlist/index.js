import { IconButton } from "@material-ui/core";
import {
  FavoriteBorderOutlined,
  MoreHoriz,
  PlayArrow,
} from "@material-ui/icons";
import { useCallback, useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import Header from "../../components/Playlist/Header";
import TracksList from "../../components/TracksList";
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
      <main className={styles.main}>
        <div className={styles.bgGradient}></div>
        {/* Actions */}
        <div className={styles.actions}>
          <IconButton style={{ backgroundColor: "#1db954" }}>
            <PlayArrow style={{ color: "white" }} />
          </IconButton>
          <IconButton>
            <FavoriteBorderOutlined style={{ color: "white" }} />
          </IconButton>
          <IconButton>
            <MoreHoriz style={{ color: "white" }} />
          </IconButton>
        </div>
        {/* Tracks list */}
        <TracksList tracks={playlistData?.tracks} />
      </main>
    </div>
  );
}

export default PlayList;
