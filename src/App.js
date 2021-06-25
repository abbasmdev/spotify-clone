import { Switch, Route, Redirect } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import styles from "./App.module.css";

function App() {
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
