import { useCallback, useEffect, useState } from "react";
import { spotifyInstance } from "../../spotify";
import styles from "./index.module.css";
import Playlists from "../../components/Playlists";
function Home2() {
  const [featurePlaylists, setFeaturePlaylists] = useState(null);
  const [toplistsPlaylists, setToplistsPlaylists] = useState(null);

  const fetchFeaturePlaylists = useCallback(() => {
    spotifyInstance
      .getFeaturedPlaylists()
      .then((pls) => {
        setFeaturePlaylists(pls);
      })
      .catch((e) => console.log(e));
  }, []);
  const fetchToplistsPlaylists = useCallback(() => {
    spotifyInstance
      .getCategoryPlaylists("toplists")
      .then((pls) => {
        setToplistsPlaylists(pls);
      })
      .catch((e) => console.log(e));
  }, []);
  useEffect(() => {
    fetchFeaturePlaylists();
    fetchToplistsPlaylists();
  }, [fetchFeaturePlaylists, fetchToplistsPlaylists]);

  return (
    <div className={styles.container}>
      {featurePlaylists && (
        <Playlists
          title="Featured Playlists"
          subtitle={featurePlaylists?.message}
          playlistsData={featurePlaylists?.playlists}
        />
      )}
      {toplistsPlaylists && (
        <Playlists
          title="Top lists Playlists"
          subtitle={toplistsPlaylists?.message}
          playlistsData={toplistsPlaylists?.playlists}
        />
      )}
      {/* <Playlists title="Featured Playlists" subtitle="Editor's picks" />
      <Playlists title="Featured Playlists" subtitle="Editor's picks" /> */}
    </div>
  );
}

export default Home2;
