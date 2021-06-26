import { useEffect } from "react";
import { spotifyInstance } from "../../spotify";
import Footer from "../../components/Home/Footer";
import Sidebar from "../../components/Home/Sidebar";
import Content from "../../components/Home/Content";
import styles from "./index.module.css";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/user/userSlice";
import { Redirect, Route, Switch } from "react-router-dom";
import Search from "../Search";
import Home2 from "../Home2";
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
        <Content className={styles.content}>
          <Switch>
            <Route path="/playlists">
              <p>playlists</p>
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route exact path="/">
              <Home2 />
            </Route>
            <Route path="/*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </Content>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
