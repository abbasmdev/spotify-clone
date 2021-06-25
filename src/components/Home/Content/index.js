import styles from "./index.module.css";
function Content({ className }) {
  return <div className={`${styles.container} ${className}`}>content</div>;
}

export default Content;
