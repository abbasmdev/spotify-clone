import styles from "./index.module.css";
import Item from "./Item";
function TracksList({ tracks }) {
  const hasTrack = tracks?.items?.length > 0;

  const trackPlayPauseHandler = (id) => {
    alert(id);
  };
  return (
    <div className={styles.tracksList}>
      {!hasTrack ? (
        <p>No track!</p>
      ) : (
        <>
          <div className={styles.tracksListHeader}>
            <div className={styles.numberAndPlay}>
              <span>#</span>
            </div>
            <div>
              <span>Title</span>
            </div>
            <div>
              <span>Album</span>
            </div>
            <div className={styles.headerDateAdded}>
              <span>Date Added</span>
            </div>
            <div style={{ textAlign: "center" }}>
              <span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M7.999 3H6.999V7V8H7.999H9.999V7H7.999V3ZM7.5 0C3.358 0 0 3.358 0 7.5C0 11.642 3.358 15 7.5 15C11.642 15 15 11.642 15 7.5C15 3.358 11.642 0 7.5 0ZM7.5 14C3.916 14 1 11.084 1 7.5C1 3.916 3.916 1 7.5 1C11.084 1 14 3.916 14 7.5C14 11.084 11.084 14 7.5 14Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
          <div className={styles.tracksListItems}>
            {tracks?.items?.map((i, index) => (
              <Item
                onPlayPause={() => trackPlayPauseHandler(i?.track?.id)}
                key={i?.track?.id}
                item={i}
                index={index + 1}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default TracksList;
