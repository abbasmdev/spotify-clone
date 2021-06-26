import PlayListItem from "./PlaylistItem";
import styles from "./index.module.css";
function Playlists({ title, subtitle }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <h5>{subtitle}</h5>
      <div className={styles.playlists}>
        <PlayListItem
          title="Playlist title goes here"
          description="subtitle goes here some more txt"
          onClick={() => alert("on playlist")}
          onPlayClick={() => alert("onPlayClick")}
        />
        <PlayListItem
          title="Playlist title goes here"
          description="subtitle goes here some more txt"
          onClick={() => alert("on playlist")}
          onPlayClick={() => alert("onPlayClick")}
        />
        <PlayListItem
          title="Playlist title goes here"
          description="subtitle goes here some more txt"
          onClick={() => alert("on playlist")}
          onPlayClick={() => alert("onPlayClick")}
        />
        <PlayListItem
          title="Playlist title goes here"
          description="subtitle goes here some more txt"
          onClick={() => alert("on playlist")}
          onPlayClick={() => alert("onPlayClick")}
        />
        <PlayListItem
          title="Playlist title goes here"
          description="subtitle goes here some more txt"
          onClick={() => alert("on playlist")}
          onPlayClick={() => alert("onPlayClick")}
        />
        <PlayListItem
          title="Playlist title goes here"
          description="subtitle goes here some more txt"
          onClick={() => alert("on playlist")}
          onPlayClick={() => alert("onPlayClick")}
        />
        <PlayListItem
          title="Playlist title goes here"
          description="subtitle goes here some more txt"
          onClick={() => alert("on playlist")}
          onPlayClick={() => alert("onPlayClick")}
        />
        <PlayListItem
          title="Playlist title goes here"
          description="subtitle goes here some more txt"
          onClick={() => alert("on playlist")}
          onPlayClick={() => alert("onPlayClick")}
        />

        <PlayListItem
          title="Playlist title goes here"
          description="subtitle goes here some more txt"
          onClick={() => alert("on playlist")}
          onPlayClick={() => alert("onPlayClick")}
        />
        <PlayListItem
          title="Playlist title goes here"
          description="subtitle goes here some more txt"
          onClick={() => alert("on playlist")}
          onPlayClick={() => alert("onPlayClick")}
        />
      </div>
    </div>
  );
}

export default Playlists;
