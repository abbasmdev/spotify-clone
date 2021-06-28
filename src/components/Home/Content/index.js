import { useRef, useState } from "react";
import Header from "./Header";
import styles from "./index.module.css";
function Content({ className, children, headerChildren }) {
  const mainRef = useRef();
  const [mainPxFromTop, setMainPxFromTop] = useState(0);

  const scrollHandler = (e) => {
    const { top } = mainRef.current.getBoundingClientRect();
    if (top > 60) return;
    setMainPxFromTop(Math.abs(top));
  };

  return (
    <div
      onScroll={scrollHandler}
      className={`${styles.container} ${className}`}
    >
      <Header pxFromTop={mainPxFromTop}>{headerChildren}</Header>

      <main ref={mainRef} className={styles.main}>
        {children}
      </main>
    </div>
  );
}

export default Content;
