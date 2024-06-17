import { Link, useSearchParams } from "react-router-dom";
import LoginModal from "../movie/LoginModal";
import { useEffect, useState } from "react";
import { createSession, deleteSession } from "@/services/authService";

const Navbar: React.FC = () => {
  const sessionIdString = localStorage.getItem("tmdb_session_id");
  const sessionId = sessionIdString ? JSON.parse(sessionIdString) : null;
  const [searchParams] = useSearchParams();

  const tokenFromParams = searchParams.get("request_token");

  const [showModal, setShowModal] = useState<boolean>(false);

  const handleIsAuth = () => {
    if (!sessionId) {
      setShowModal(true);
    }
  };

  const handleLogout = async () => {
    try {
      const res = await deleteSession("29daaf6815e469188300e950d6cd9d9e3c3aaf0d");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (tokenFromParams) {
      createSession(tokenFromParams);
    }
  }, [tokenFromParams]);

  return (
    <>
      <nav className="bg-primary-blue">
        <div className="max-w-7xl mx-auto p-5">
          <div className="flex items-center justify-between">
            <Link to="/">
              <h1 className="text-5xl font-extrabold tracking-[.4em]">CINEMA</h1>
            </Link>

            <div className="flex items-center gap-x-[50px] font-roboto">
              <button onClick={handleIsAuth}>
                <Link to="/favorite" className="text-xl">
                  Favorite
                </Link>
              </button>
              <button onClick={handleIsAuth}>
                <Link to="/watchlist" className="text-xl">
                  Watchlist
                </Link>
              </button>
              <button onClick={handleLogout}>
                <Link to="/" className="text-xl">
                  Logout
                </Link>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {showModal && <LoginModal />}
    </>
  );
};

export default Navbar;
