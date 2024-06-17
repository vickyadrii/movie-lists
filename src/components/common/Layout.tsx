import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "./Navbar";
import { getAccountDetails } from "@/services/authService";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const { pathname } = useLocation();

  const sessionIdString = localStorage.getItem("tmdb_session_id");
  const sessionId = sessionIdString ? JSON.parse(sessionIdString) : null;

  const navLists = ["/", "/favorite", "/watchlist"];

  useEffect(() => {
    if (sessionId) {
      getAccountDetails();
    }
  }, [sessionId]);

  return (
    <div className={`${navLists.includes(pathname) ? "space-y-5" : "space-y-0"}`}>
      <Navbar />
      <div className={`${navLists.includes(pathname) ? "max-w-[1360px] mx-auto p-5" : ""}`}>{children}</div>
    </div>
  );
};

export default Layout;
