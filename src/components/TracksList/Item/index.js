import { IconButton } from "@material-ui/core";
import {
  Favorite,
  FavoriteBorderOutlined,
  MoreHoriz,
  PlayArrow,
} from "@material-ui/icons";
import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";
import { msToMinutesAndSecondsFormated } from "../../../utils/convert";
function Item({ item, index }) {
  return (
    <div className={styles.tracksListItem}>
      <div className={styles.colItem} style={{ justifyContent: "center" }}>
        <span className={styles.trackIndex}>{index}</span>
        <IconButton className={styles.playPauseButton} size="small">
          <PlayArrow style={{ color: "white" }} />
        </IconButton>
      </div>
      <div className={`${styles.colItem} ${styles.nameAndArtists}`}>
        <p className={styles.trackName}>{item?.track?.name}</p>
        {item?.track?.artists?.length > 0 && (
          <span className={styles.artistsLinks}>
            {item?.track?.artists.map((artist, index) => (
              <React.Fragment key={artist?.id}>
                <Link to={`/artist/${artist?.id}`}>{artist?.name}</Link>
                {item?.track?.artists?.length - 1 !== index && ", "}
              </React.Fragment>
            ))}
          </span>
        )}
      </div>
      <div className={styles.colItem}>
        <span>{item?.track?.album?.name}</span>
      </div>
      <div className={`${styles.colItem} ${styles.itemDateAdded}`}>
        <span>{moment(item?.added_at).format("ll")}</span>
      </div>
      <div className={`${styles.colItem} ${styles.timeAndActions}`}>
        <IconButton size="small" className={styles.actionFav}>
          <FavoriteBorderOutlined style={{ color: "white" }} />
        </IconButton>
        <span>
          {msToMinutesAndSecondsFormated(item?.track?.duration_ms).minutes}:
          {msToMinutesAndSecondsFormated(item?.track?.duration_ms).seconds}
        </span>
        <IconButton size="small" className={styles.actionMore}>
          <MoreHoriz style={{ color: "white" }} />
        </IconButton>
      </div>
    </div>
  );
}

export default Item;
