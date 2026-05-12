import { Link, useNavigate } from "react-router-dom";
import NotificationBell from "./NotificationBell";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    navigate("/login");

    setMenuOpen(false);

  };

  const navLinkClass =
    "relative text-gray-200 hover:text-green-400 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-green-400 hover:after:w-full after:transition-all after:duration-300";

  return (

    <nav className="w-full sticky top-0 z-[9999] border-b border-green-500/10 bg-black/80 backdrop-blur-2xl shadow-[0_0_25px_rgba(34,197,94,0.08)]">

      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 xl:px-10 h-20 flex items-center justify-between">

        {/* LOGO */}

        <Link
          to="/"
          className="text-xl sm:text-2xl xl:text-3xl font-extrabold bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent whitespace-nowrap tracking-tight"
        >
          CyberShield AI
        </Link>

        {/* DESKTOP MENU */}

        <div className="hidden xl:flex items-center gap-10 text-[15px] font-medium tracking-wide">

          <Link
            to="/"
            className={navLinkClass}
          >
            Home
          </Link>

          <Link
            to="/about"
            className={navLinkClass}
          >
            About
          </Link>

          <Link
            to="/complaint"
            className={navLinkClass}
          >
            Complaint
          </Link>

          {/* TOOLS DROPDOWN */}

          <div className="relative group">

            <button
              className="flex items-center gap-2 text-gray-200 hover:text-green-400 transition-all duration-300"
            >
              Tools
              <ChevronDown size={18} />
            </button>

            <div className="absolute left-0 top-full pt-3 hidden group-hover:flex flex-col w-64 bg-black border border-green-500/20 rounded-2xl p-5 shadow-2xl gap-4 z-[9999]">

              <Link
                to="/track-complaint"
                className="px-3 py-2 rounded-xl hover:bg-green-500/10 hover:text-green-400 transition-all duration-300"
              >
                Track Complaint
              </Link>

              <Link
                to="/threat-detection"
                className="px-3 py-2 rounded-xl hover:bg-green-500/10 hover:text-green-400 transition-all duration-300"
              >
                Threat Scanner
              </Link>

              <Link
                to="/ocr-scanner"
                className="px-3 py-2 rounded-xl hover:bg-green-500/10 hover:text-green-400 transition-all duration-300"
              >
                OCR Scanner
              </Link>

              <Link
                to="/cyber-quiz"
                className="px-3 py-2 rounded-xl hover:bg-green-500/10 hover:text-green-400 transition-all duration-300"
              >
                Cyber Quiz
              </Link>

              <Link
                to="/cyber-chatbot"
                className="px-3 py-2 rounded-xl hover:bg-green-500/10 hover:text-green-400 transition-all duration-300"
              >
                AI Assistant
              </Link>

            </div>

          </div>

          {/* BEFORE LOGIN */}

          {!user && (

            <>

              <Link
                to="/login"
                className={navLinkClass}
              >
                Login
              </Link>

              <Link
                to="/register"
                className="bg-gradient-to-r from-green-400 to-emerald-500 text-black px-6 py-3 rounded-2xl font-semibold shadow-lg shadow-green-500/20 hover:scale-105 transition-all duration-300"
              >
                Sign Up
              </Link>

            </>

          )}

          {/* AFTER LOGIN */}

          {user && (

            <>

              <div className="ml-2">
                <NotificationBell />
              </div>

              {user.role === "admin" && (

                <Link
                  to="/admin"
                  className="bg-gradient-to-r from-green-400 to-emerald-500 text-black px-6 py-3 rounded-2xl font-semibold shadow-lg shadow-green-500/20 hover:scale-105 transition-all duration-300"
                >
                  Admin Panel
                </Link>

              )}

              {user.role === "user" && (

                <Link
                  to="/user-dashboard"
                  className="bg-gradient-to-r from-green-400 to-emerald-500 text-black px-6 py-3 rounded-2xl font-semibold shadow-lg shadow-green-500/20 hover:scale-105 transition-all duration-300"
                >
                  My Dashboard
                </Link>

              )}

              <Link to="/profile">

                {

                  user?.avatar ? (

                    <img
                      src={user.avatar}
                      alt="profile"
                      className="w-11 h-11 rounded-full object-cover border-2 border-green-400 shadow-lg shadow-green-500/20"
                    />

                  ) : (

                    <div className="w-11 h-11 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 text-black flex items-center justify-center font-bold text-lg shadow-lg shadow-green-500/20">

                      {user?.name?.charAt(0)}

                    </div>

                  )

                }

              </Link>

              <button
                onClick={logout}
                className="bg-red-500/90 px-6 py-3 rounded-2xl hover:bg-red-400 transition-all duration-300 font-semibold"
              >
                Logout
              </button>

            </>

          )}

        </div>

        {/* MOBILE MENU BUTTON */}

        <button
          className="xl:hidden text-green-400 p-2 rounded-xl hover:bg-green-500/10 transition-all duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >

          {

            menuOpen ? (
              <X size={32} />
            ) : (
              <Menu size={32} />
            )

          }

        </button>

      </div>

      {/* MOBILE MENU */}

      {

        menuOpen && (

          <div className="xl:hidden min-h-screen bg-black/95 border-t border-green-500/20 px-6 py-8 flex flex-col gap-6 text-white font-medium">

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-lg hover:text-green-400 transition"
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="text-lg hover:text-green-400 transition"
            >
              About
            </Link>

            <Link
              to="/complaint"
              onClick={() => setMenuOpen(false)}
              className="text-lg hover:text-green-400 transition"
            >
              Complaint
            </Link>

            <Link
              to="/track-complaint"
              onClick={() => setMenuOpen(false)}
              className="text-lg hover:text-green-400 transition"
            >
              Track Complaint
            </Link>

            <Link
              to="/threat-detection"
              onClick={() => setMenuOpen(false)}
              className="text-lg hover:text-green-400 transition"
            >
              Threat Scanner
            </Link>

            <Link
              to="/ocr-scanner"
              onClick={() => setMenuOpen(false)}
              className="text-lg hover:text-green-400 transition"
            >
              OCR Scanner
            </Link>

            <Link
              to="/cyber-quiz"
              onClick={() => setMenuOpen(false)}
              className="text-lg hover:text-green-400 transition"
            >
              Cyber Quiz
            </Link>

            <Link
              to="/cyber-chatbot"
              onClick={() => setMenuOpen(false)}
              className="text-lg hover:text-green-400 transition"
            >
              AI Assistant
            </Link>

            {!user && (

              <>

                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="text-lg hover:text-green-400 transition"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  onClick={() => setMenuOpen(false)}
                  className="bg-gradient-to-r from-green-400 to-emerald-500 text-black px-5 py-4 rounded-2xl text-center font-bold"
                >
                  Sign Up
                </Link>

              </>

            )}

            {user && (

              <>

                {user.role === "admin" && (

                  <Link
                    to="/admin"
                    onClick={() => setMenuOpen(false)}
                    className="bg-gradient-to-r from-green-400 to-emerald-500 text-black px-5 py-4 rounded-2xl text-center font-bold"
                  >
                    Admin Panel
                  </Link>

                )}

                {user.role === "user" && (

                  <Link
                    to="/user-dashboard"
                    onClick={() => setMenuOpen(false)}
                    className="bg-gradient-to-r from-green-400 to-emerald-500 text-black px-5 py-4 rounded-2xl text-center font-bold"
                  >
                    My Dashboard
                  </Link>

                )}

                <Link
                  to="/profile"
                  onClick={() => setMenuOpen(false)}
                  className="text-lg hover:text-green-400 transition"
                >
                  Profile
                </Link>

                <button
                  onClick={logout}
                  className="bg-red-500/90 px-5 py-4 rounded-2xl font-semibold"
                >
                  Logout
                </button>

              </>

            )}

          </div>

        )

      }

    </nav>

  );

}

export default Navbar;