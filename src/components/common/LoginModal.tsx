import { useEffect, useState } from "react";

import tmdbLogo from "@/assets/tmdb_logo.png";
import { getRequestToken } from "@/services/authService";

const LoginModal = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogin = async () => {
    setIsLoading(true);

    try {
      const requestToken = await getRequestToken();
      window.location.href = `https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=http://localhost:5173`;
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed w-full h-screen bg-black/20 backdrop-blur-sm top-0 z-10 animate-fadeIn">
      <div className="flex h-screen justify-center items-center">
        <button
          onClick={handleLogin}
          className="bg-white px-[43px] py-[33px] flex flex-col items-center gap-2 rounded-3xl animate-scaleUp"
        >
          <img src={tmdbLogo} alt="tbdb_logo" />
          <span className="text-black text-sm">{isLoading ? "Loading..." : "Login with TMDB"}</span>
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
