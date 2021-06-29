import { IconButton, Slider } from "@material-ui/core";
import {
  PlayCircleOutline as PlayCircleOutlineIcon,
  SkipPrevious as SkipPreviousIcon,
  SkipNext as SkipNextIcon,
  Shuffle as ShuffleIcon,
  Repeat as RepeatIcon,
  VolumeDown,
  Pause as PauseIcon,
} from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";

import {
  pausePlayer,
  playPlayer,
  PLAY_STATE,
  selectCurrentTrack,
  selectCurrentVolume,
  selectPlayerPlayState,
  setPlayerVolume,
} from "../../../store/player/playerSlice";
import styles from "./index.module.css";
function Footer({ className }) {
  const dispatch = useDispatch();
  const currentTrack = useSelector(selectCurrentTrack);
  const currentVolume = useSelector(selectCurrentVolume);
  const playerPlayState = useSelector(selectPlayerPlayState);

  console.log("playerPlayState>>", playerPlayState);
  const volumeChangeHandler = (e, value) => {
    dispatch(setPlayerVolume(value));
  };

  const pauseClickHandler = () => {
    dispatch(pausePlayer());
  };
  const playClickHandler = () => {
    dispatch(playPlayer());
  };

  return (
    <footer className={`${styles.container} ${className}`}>
      <div className={styles.left}>
        <div>
          <img
            className={styles.trackCover}
            src={
              currentTrack?.album?.images?.[2]?.url
                ? currentTrack?.album?.images?.[2]?.url
                : ""
            }
            alt=""
          />
        </div>

        <div className={styles.trackInfo}>
          <p className={styles.trackName}>
            {currentTrack ? currentTrack?.name : "No name"}
          </p>
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

        {playerPlayState === PLAY_STATE.playing && (
          <IconButton onClick={pauseClickHandler} color="primary">
            <PauseIcon className={styles.controlIconPlay} fontSize="large" />
          </IconButton>
        )}
        {playerPlayState !== PLAY_STATE.playing && (
          <IconButton onClick={playClickHandler} color="primary">
            <PlayCircleOutlineIcon
              className={styles.controlIconPlay}
              fontSize="large"
            />
          </IconButton>
        )}

        <IconButton color="primary">
          <SkipNextIcon className={styles.controlIcon} />
        </IconButton>
        <IconButton color="primary">
          <RepeatIcon className={styles.controlIcon} />
        </IconButton>
      </div>
      <div className={styles.right}>
        <VolumeDown />
        <Slider
          value={currentVolume}
          onChange={volumeChangeHandler}
          min={0}
          max={1}
          step={0.1}
        />
      </div>
    </footer>
  );
}

export default Footer;
