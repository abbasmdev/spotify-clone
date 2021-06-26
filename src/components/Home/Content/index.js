import Header from "./Header";
import styles from "./index.module.css";
function Content({ className, children }) {
  return (
    <div className={`${styles.container} ${className}`}>
      <Header />
      <main>{children}</main>
    </div>
  );
}

export default Content;
