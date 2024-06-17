import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "../common/Layout";

// Routes
import HomePage from "@/pages/HomePage";
import FavoritePage from "@/pages/FavoritePage";
import WatchlistPage from "@/pages/WatchlistPage";

const AppRoutes = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorite" element={<FavoritePage />} />
          <Route path="/watchlist" element={<WatchlistPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRoutes;
