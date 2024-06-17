import { useEffect } from "react";
import Navbar from "./Navbar";
import { getAccountDetails } from "@/services/authService";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  useEffect(() => {
    getAccountDetails();
  }, []);

  return (
    <div className="space-y-5">
      <Navbar />
      <div className="max-w-[1360px] mx-auto p-5">{children}</div>
    </div>
  );
};

export default Layout;
