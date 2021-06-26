import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import { useDispatch, useSelector } from "react-redux";
import {
  getAuthLoginDataFromStorage,
  selectAuthAccessToken,
} from "./store/auth/authSlice";
import { useEffect } from "react";
import { spotifyInstance } from "./spotify";
import styles from "./App.module.css";

function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  const authAccessToken = useSelector(selectAuthAccessToken);

  useEffect(() => {
    if (authAccessToken) {
      spotifyInstance.setAccessToken(authAccessToken);
      spotifyInstance.getMe().then((s) => console.log(s));
      history.replace("/");
    } else {
      history.push("/auth");
    }
  }, [authAccessToken, history]);

  useEffect(() => {
    dispatch(getAuthLoginDataFromStorage());
  }, [dispatch]);
  return (
    <div className={styles.app}>
      <Switch>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route path="/">
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
