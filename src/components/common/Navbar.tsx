import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-primary-blue">
      <div className="max-w-7xl mx-auto p-5">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-5xl font-extrabold tracking-[.4em]">CINEMA</h1>
          </div>

          <div className="flex items-center gap-x-[50px] font-roboto">
            <button>
              <Link to="/" className="text-xl">
                Favorite
              </Link>
            </button>
            <Link to="/" className="text-xl">
              Watchlist
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
