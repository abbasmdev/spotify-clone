import { IconButton } from "@material-ui/core";
import { PlayArrow } from "@material-ui/icons";
import styles from "./index.module.css";
function PlayListItem({ title, description, onClick, onPlayClick, imageSrc }) {
  return (
    <div onClick={onClick} className={styles.container}>
      <div className={styles.cover}>
        <img src={imageSrc} alt={title} />
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
