import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "../common/Layout";

// Routes
import HomePage from "@/pages/HomePage";
import PrivateRoute from "./PrivateRoute";

const AppRoutes = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<PrivateRoute />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRoutes;
