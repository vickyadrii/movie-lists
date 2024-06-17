import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

import LoginModal from "../movie/LoginModal";
import { createSession, deleteSession } from "@/services/authService";

import iconLogout from "@/assets/ic_logout.svg";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const sessionIdString = localStorage.getItem("tmdb_session_id");
  const sessionId = sessionIdString ? JSON.parse(sessionIdString) : null;
  const [searchParams] = useSearchParams();

  const tokenFromParams = searchParams.get("request_token");

  const [showModal, setShowModal] = useState<boolean>(false);

  const handleIsAuth = (href: string) => {
    if (!sessionId) {
      setShowModal(true);
    } else {
      navigate(href);
    }
  };

  const handleLogout = async () => {
    try {
      const res = await deleteSession(sessionId);
      console.log(res);
      localStorage.clear();
      window.location.reload();
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
      {showModal && <LoginModal onClose={() => setShowModal(false)} />}

      <nav className="bg-primary-blue">
        <div className="max-w-7xl mx-auto p-5">
          <div className="flex items-center justify-between">
            <Link to="/">
              <h1 className="text-5xl font-extrabold tracking-[.4em]">CINEMA</h1>
            </Link>

            <div className="flex items-center gap-x-[50px] font-roboto">
              <button onClick={() => handleIsAuth("/favorite")}>
                <span className="text-xl">Favorite</span>
              </button>
              <button onClick={() => handleIsAuth("/watchlist")}>
                <span className="text-xl">Watchlist</span>
              </button>
              {sessionId && (
                <button onClick={handleLogout}>
                  <img src={iconLogout} alt="ic_logout" />
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
