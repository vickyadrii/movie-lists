import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Navbar />
      <div className="max-w-[1360px] mx-auto p-5">{children}</div>
    </div>
  );
};

export default Layout;
