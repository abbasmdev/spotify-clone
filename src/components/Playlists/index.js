import PlayListItem from "./PlaylistItem";
import styles from "./index.module.css";
function Playlists({ title, subtitle, playlistsData }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <h5>{subtitle}</h5>
      <div className={styles.playlists}>
        {playlistsData?.items?.length > 0 ? (
          playlistsData?.items?.map((item) => (
            <PlayListItem
              key={item?.id}
              title={item?.name}
              description={item?.description}
              imageSrc={item?.images?.[0]?.url}
              onClick={() => alert("on playlist")}
              onPlayClick={() => alert("onPlayClick")}
            />
          ))
        ) : (
          <div className={styles.noPlaylist}>
            <p>No Playlist</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Playlists;
