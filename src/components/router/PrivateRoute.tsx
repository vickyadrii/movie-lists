import { Route, Routes } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";

import NotFoundPage from "@/pages/NotFoundPage";
import FavoritePage from "@/pages/FavoritePage";
import WatchlistPage from "@/pages/WatchlistPage";
import MovieDetailPage from "@/pages/MovieDetailPage";

const PrivateRoute = () => {
  return (
    <ProtectedRoute>
      <Routes>
        <Route path="/:id" element={<MovieDetailPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/watchlist" element={<WatchlistPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ProtectedRoute>
  );
};

export default PrivateRoute;
