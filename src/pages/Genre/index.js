import { useCallback, useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import Playlists from "../../components/Playlists";
import { spotifyInstance } from "../../spotify";
import styles from "./index.module.css";

function Genre() {
  const [genrePlaylists, setGenrePlaylists] = useState(null);
  const match = useRouteMatch();
  const id = match.params.id;

  const fetchGenrePlaylists = useCallback(() => {
    spotifyInstance
      .getCategoryPlaylists(id)
      .then((pls) => {
        setGenrePlaylists(pls);
      })
      .catch((e) => console.log(e));
  }, [id]);

  useEffect(() => {
    fetchGenrePlaylists();
  }, [fetchGenrePlaylists]);
  console.log("genrePlaylists", genrePlaylists);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>{id}</h1>
      </div>
      <main className={styles.main}>
        <Playlists
          title="Playlists"
          playlistsData={{ items: genrePlaylists?.playlists?.items }}
        />
      </main>
    </div>
  );
}

export default Genre;
