import Header from "./Header";
import styles from "./index.module.css";
function Content({ className }) {
  return (
    <div className={`${styles.container} ${className}`}>
      <Header />
    </div>
  );
}

export default Content;
