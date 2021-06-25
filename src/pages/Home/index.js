import { useEffect } from "react";
import { spotifyInstance } from "../../spotify";
import Footer from "../../components/Home/Footer";
import Sidebar from "../../components/Home/Sidebar";
import Content from "../../components/Home/Content";
import styles from "./index.module.css";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/user/userSlice";
function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    spotifyInstance.getUserPlaylists().then((paylists) => {
      dispatch(userActions.setPlayLists(paylists));
    });
  }, [dispatch]);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Sidebar className={styles.sidebar} />
        <Content className={styles.content} />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
