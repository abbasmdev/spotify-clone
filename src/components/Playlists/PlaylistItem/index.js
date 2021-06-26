import { IconButton } from "@material-ui/core";
import { PlayArrow } from "@material-ui/icons";
import styles from "./index.module.css";
function PlayListItem({ title, description, onClick, onPlayClick }) {
  return (
    <div onClick={onClick} className={styles.container}>
      <div className={styles.cover}>
        <img
          src="https://i.scdn.co/image/ab67706f000000028623104b16ed3c2ec24282be"
          alt=""
        />
        <IconButton
          className={styles.playButton}
          color="primary"
          onClick={(e) => {
            e.stopPropagation();
            onPlayClick();
          }}
        >
          <PlayArrow />
        </IconButton>
      </div>

      <div className={styles.titleContainer}>
        <h4 className={styles.title}>{title}</h4>
      </div>

      <div className={styles.descriptionContainer}>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

export default PlayListItem;
