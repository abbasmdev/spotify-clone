import styles from "./index.module.css";
function PlayListItem({ text, onClick }) {
  return (
    <div className={styles.container} onClick={onClick}>
      <p>{text}</p>
    </div>
  );
}

export default PlayListItem;
