import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

import LoginModal from "@/components/movie/LoginModal";
import { createSession, deleteSession } from "@/services/authService";

import iconLogout from "@/assets/ic_logout.svg";
import iconHamburger from "@/assets/ic_hamburger.svg";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const sessionIdString = localStorage.getItem("tmdb_session_id");
  const sessionId = sessionIdString ? JSON.parse(sessionIdString) : null;
  const [searchParams] = useSearchParams();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showNavbar, setShowNavbar] = useState<boolean>(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const tokenFromParams = searchParams.get("request_token");

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
      <nav className="bg-primary-blue">
        {/* Navbar Dekstop */}
        <div className="max-w-7xl mx-auto p-5 md:block hidden">
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

        {/* Navbar Mobile */}
        <div className="md:hidden flex items-center justify-end p-5 z-30 relative">
          <button onClick={handleShowNavbar}>
            <img src={iconHamburger} alt="ic_hamburger" />
          </button>
        </div>
      </nav>

      <div
        className={`md:hidden min-h-screen w-full fixed bg-primary-blue top-0 ${showNavbar ? "left-0" : "left-full"} z-20 transition-all duration-300`}
      >
        <div className="min-h-screen px-5 py-10">
          <div className="flex flex-col gap-y-4">
            <Link to="/" onClick={handleShowNavbar}>
              <h1 className="text-5xl font-extrabold tracking-[.4em]">CINEMA</h1>
            </Link>
            <div className="flex flex-col items-start gap-y-4 font-roboto">
              <button
                onClick={() => {
                  handleIsAuth("/favorite");
                  handleShowNavbar();
                }}
              >
                <span className="text-xl">Favorite</span>
              </button>
              <button
                onClick={() => {
                  handleIsAuth("/watchlist");
                  handleShowNavbar();
                }}
              >
                <span className="text-xl">Watchlist</span>
              </button>
              {sessionId && (
                <button
                  onClick={() => {
                    handleLogout();
                    handleShowNavbar();
                  }}
                  className="flex items-center gap-2 text-xl"
                >
                  <img src={iconLogout} alt="ic_logout" />
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {showModal && <LoginModal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default Navbar;
