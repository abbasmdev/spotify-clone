import { useEffect } from "react";
import { spotifyInstance } from "../../spotify";
import Footer from "../../components/Home/Footer";
import Sidebar from "../../components/Home/Sidebar";
import Content from "../../components/Home/Content";
import styles from "./index.module.css";
function Home() {
  useEffect(() => {
    console.log(spotifyInstance.getAccessToken());
  }, []);
  return (
    <div>
      <main>
        <Sidebar />
        <Content />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
