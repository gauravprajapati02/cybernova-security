import { Link } from "react-router-dom";

import {
  FaHome,
  FaUser,
  FaBug,
  FaRobot,
  FaHistory,
  FaFileAlt,
  FaShieldAlt,
} from "react-icons/fa";

function Sidebar() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  return (

    <div className="w-72 min-h-screen bg-black/40 backdrop-blur-xl border-r border-green-500/30 p-6">

      <h1 className="text-4xl font-bold text-green-400 mb-12">

        CyberShield

      </h1>

      <ul className="space-y-6 text-lg">

        {/* HOME */}

        <li>

          <Link
            to="/"
            className="flex items-center gap-4 hover:text-green-300 transition"
          >

            <FaHome />

            Home

          </Link>

        </li>

        {/* USER LINKS */}

        {user?.role === "user" && (

          <>

            <li>

              <Link
                to="/user-dashboard"
                className="flex items-center gap-4 hover:text-green-300 transition"
              >

                <FaFileAlt />

                My Complaints

              </Link>

            </li>

            <li>

              <Link
                to="/complaint"
                className="flex items-center gap-4 hover:text-green-300 transition"
              >

                <FaBug />

                Register Complaint

              </Link>

            </li>

          </>

        )}

        {/* ADMIN LINKS */}

        {user?.role === "admin" && (

          <>

            <li>

              <Link
                to="/admin"
                className="flex items-center gap-4 hover:text-green-300 transition"
              >

                <FaShieldAlt />

                Admin Panel

              </Link>

            </li>

            <li>

              <Link
                to="/threat-detection"
                className="flex items-center gap-4 hover:text-green-300 transition"
              >

                <FaRobot />

                Threat Scanner

              </Link>

            </li>

            <li>

              <Link
                to="/ocr-scanner"
                className="flex items-center gap-4 hover:text-green-300 transition"
              >

                <FaRobot />

                OCR Scanner

              </Link>

            </li>

            <li>

              <Link
                to="/threat-history"
                className="flex items-center gap-4 hover:text-green-300 transition"
              >

                <FaHistory />

                Threat History

              </Link>
              <Link
  to="/ocr-scanner"
  className="flex items-center gap-3 p-3 rounded-xl hover:bg-green-500/20 transition duration-300"
>
  <span>📄</span>
  OCR Scanner
</Link>

            </li>

          </>

        )}

        {/* PROFILE */}

        <li>

          <Link
            to="/profile"
            className="flex items-center gap-4 hover:text-green-300 transition"
          >

            <FaUser />

            Profile

          </Link>

        </li>

      </ul>

    </div>

  );

}

export default Sidebar;