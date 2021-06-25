import { IconButton, Slider } from "@material-ui/core";
import {
  PlayCircleOutline as PlayCircleOutlineIcon,
  SkipPrevious as SkipPreviousIcon,
  SkipNext as SkipNextIcon,
  Shuffle as ShuffleIcon,
  Repeat as RepeatIcon,
  VolumeDown,
} from "@material-ui/icons";
import styles from "./index.module.css";
function Footer({ className }) {
  return (
    <footer className={`${styles.container} ${className}`}>
      <div className={styles.left}>
        <img
          className={styles.trackCover}
          src="https://i.scdn.co/image/ab67616d0000b273f0a6041d3ab38beba5aa9f70"
          alt="artist cover"
        />
        <div className={styles.trackInfo}>
          <p className={styles.trackName}>name</p>
          <p className={styles.trackArtist}>artists</p>
        </div>
      </div>
      <div className={styles.middle}>
        <IconButton color="primary">
          <ShuffleIcon className={styles.controlIcon} />
        </IconButton>
        <IconButton color="primary">
          <SkipPreviousIcon className={styles.controlIcon} />
        </IconButton>
        <IconButton color="primary">
          <PlayCircleOutlineIcon
            className={styles.controlIconPlay}
            fontSize="large"
          />
        </IconButton>
        <IconButton color="primary">
          <SkipNextIcon className={styles.controlIcon} />
        </IconButton>
        <IconButton color="primary">
          <RepeatIcon className={styles.controlIcon} />
        </IconButton>
      </div>
      <div className={styles.right}>
        <VolumeDown />
        <Slider />
      </div>
    </footer>
  );
}

export default Footer;
