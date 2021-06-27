import Header from "./Header";
import styles from "./index.module.css";
function Content({ className, children, headerChildren }) {
  return (
    <div className={`${styles.container} ${className}`}>
      <Header>{headerChildren}</Header>
      <main className={styles.main}>{children}</main>
    </div>
  );
}

export default Content;
