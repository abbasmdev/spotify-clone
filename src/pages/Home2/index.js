import styles from "./index.module.css";
import Playlists from "../../components/Playlists";
function Home2() {
  return (
    <div className={styles.container}>
      <Playlists title="Featured Playlists" subtitle="Editor's picks" />
      <Playlists title="Featured Playlists" subtitle="Editor's picks" />
      <Playlists title="Featured Playlists" subtitle="Editor's picks" />
    </div>
  );
}

export default Home2;
