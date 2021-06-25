import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import styles from "./App.module.css";
import { useSelector } from "react-redux";
import { selectAuthAccessToken } from "./store/auth/authSlice";
import { useEffect } from "react";
import { spotifyInstance } from "./spotify";

function App() {
  const authAccessToken = useSelector(selectAuthAccessToken);
  const history = useHistory();
  useEffect(() => {
    if (authAccessToken) {
      spotifyInstance.setAccessToken(authAccessToken);
      spotifyInstance.getMe().then((s) => console.log(s));
      history.replace("/");
    } else {
      history.replace("/auth");
    }
  }, [authAccessToken, history]);
  return (
    <div className={styles.app}>
      <Switch>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
