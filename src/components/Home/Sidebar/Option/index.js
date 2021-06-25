import styles from "./index.module.css";
function Option({ label, Icon, onClick, className, active = false }) {
  return (
    <div
      className={`${styles.container} ${className} ${active && styles.active}`}
      onClick={onClick}
    >
      {Icon && <Icon />} <span className={styles.label}>{label}</span>
    </div>
  );
}

export default Option;
