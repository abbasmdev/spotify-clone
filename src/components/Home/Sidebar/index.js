import styles from "./index.module.css";
function Sidebar({ className }) {
  return <div className={`${styles.container} ${className}`}>sidebar</div>;
}

export default Sidebar;
