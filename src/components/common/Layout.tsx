import { useEffect } from "react";
import Navbar from "./Navbar";
import { getAccountDetails } from "@/services/authService";
import { useLocation } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const { pathname } = useLocation();

  useEffect(() => {
    getAccountDetails();
  }, []);

  const navLists = ["/", "/favorite", "/watchlist"];

  return (
    <div className={`${navLists.includes(pathname) ? "space-y-5" : "space-y-0"}`}>
      <Navbar />
      <div className={`${navLists.includes(pathname) ? "max-w-[1360px] mx-auto p-5" : ""}`}>{children}</div>
    </div>
  );
};

export default Layout;
