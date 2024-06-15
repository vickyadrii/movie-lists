import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Routes
import HomePage from "@/pages/HomePage";
import Layout from "../common/Layout";

// const tes = import.meta.env.VITE_TMDB_API_KEY
// console.log(tes)

const AppRoutes = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRoutes;
