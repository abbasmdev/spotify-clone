import styles from "./index.module.css";
function Header({ playlistData }) {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.cover}>
          <img src={playlistData?.images?.[0]?.url} alt="Playlist" />
        </div>
        <div className={styles.detail}>
          <h2 className={styles.type}>{playlistData?.type}</h2>
          <h1 className={styles.name}>{playlistData?.name}</h1>
          <div className={styles.ownerTotalSong}>
            <h4>{playlistData?.owner?.display_name}</h4>
            <p className={styles.totalSong}>
              {playlistData?.tracks?.total} <span>song(s)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
