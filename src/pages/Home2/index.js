import { useCallback, useEffect, useState } from "react";
import { spotifyInstance } from "../../spotify";
import styles from "./index.module.css";
import Playlists from "../../components/Playlists";
function Home2() {
  const [featurePlaylists, setFeaturePlaylists] = useState(null);
  const [toplistsPlaylists, setToplistsPlaylists] = useState(null);
  const [workoutPlaylists, setWorkoutPlaylists] = useState(null);
  const [chillPlaylists, setChillPlaylists] = useState(null);

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

  const fetchWorkoutPlaylists = useCallback(() => {
    spotifyInstance
      .getCategoryPlaylists("workout")
      .then((pls) => {
        setWorkoutPlaylists(pls);
      })
      .catch((e) => console.log(e));
  }, []);

  const fetchChillPlaylists = useCallback(() => {
    spotifyInstance
      .getCategoryPlaylists("chill")
      .then((pls) => {
        setChillPlaylists(pls);
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    fetchFeaturePlaylists();
    fetchToplistsPlaylists();
    fetchWorkoutPlaylists();
    fetchChillPlaylists();
  }, [
    fetchFeaturePlaylists,
    fetchToplistsPlaylists,
    fetchWorkoutPlaylists,
    fetchChillPlaylists,
  ]);

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
      {workoutPlaylists && (
        <Playlists
          title="Workout Playlists"
          subtitle={workoutPlaylists?.message}
          playlistsData={workoutPlaylists?.playlists}
        />
      )}
      {chillPlaylists && (
        <Playlists
          title="Chill Playlists"
          subtitle={chillPlaylists?.message}
          playlistsData={chillPlaylists?.playlists}
        />
      )}
      {/* <Playlists title="Featured Playlists" subtitle="Editor's picks" />
      <Playlists title="Featured Playlists" subtitle="Editor's picks" /> */}
    </div>
  );
}

export default Home2;
