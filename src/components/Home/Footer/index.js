import styles from "./index.module.css";
function Footer({ className }) {
  return <footer className={`${styles.container} ${className}`}>footer</footer>;
}

export default Footer;
