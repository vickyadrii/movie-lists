import { useEffect } from "react";
import NowPlaying from "./components/NowPlaying";

const Home = () => {
  useEffect(() => {
    document.title = "Home page | Technical Test Seryu Cargo";
  }, []);

  return (
    <div>
      <NowPlaying />
    </div>
  );
};

export default Home;
