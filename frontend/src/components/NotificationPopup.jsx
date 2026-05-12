
import { useEffect, useState } from "react";

import {
  FaBell,
  FaShieldAlt,
} from "react-icons/fa";

function NotificationPopup() {

  const [show, setShow] = useState(false);

  useEffect(() => {

    const interval = setInterval(() => {

      setShow(true);

      setTimeout(() => {

        setShow(false);

      }, 5000);

    }, 20000);

    return () => clearInterval(interval);

  }, []);

  if (!show) return null;

  return (

    <div className="fixed top-24 right-6 bg-gray-900 border border-green-500 text-white p-5 rounded-2xl shadow-2xl z-50 w-96 animate-pulse">

      <div className="flex items-start gap-4">

        <div className="bg-green-500 p-3 rounded-full text-black">

          <FaBell className="text-2xl" />

        </div>

        <div>

          <h2 className="text-xl font-bold text-green-400 mb-2">

            Cyber Alert

          </h2>

          <p className="text-gray-300 leading-7">

            <FaShieldAlt className="inline mr-2 text-green-400" />

            Stay alert against phishing attacks and suspicious links.

          </p>

        </div>

      </div>

    </div>

  );

}

export default NotificationPopup;