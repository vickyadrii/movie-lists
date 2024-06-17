import { useEffect } from "react";

import TopRated from "./components/TopRated";
import NowPlaying from "./components/NowPlaying";

const Home = () => {
  useEffect(() => {
    document.title = "Home page | Technical Test Seryu Cargo";
  }, []);

  return (
    <div className="space-y-10">
      <NowPlaying />

      <TopRated />
    </div>
  );
};

export default Home;
