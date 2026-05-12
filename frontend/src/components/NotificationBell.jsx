import { useEffect, useState } from "react";

import { Bell } from "lucide-react";

function NotificationBell() {

  const [notifications, setNotifications] =
    useState([]);

  const [open, setOpen] =
    useState(false);

  useEffect(() => {

    const stored =
      JSON.parse(

        localStorage.getItem(
          "notifications"
        )

      ) || [];

    setNotifications(stored);

  }, []);

  return (

    <div className="relative">

      {/* BELL */}

      <button
        onClick={() =>
          setOpen(!open)
        }
        className="relative"
      >

        <Bell
          className="text-green-400"
          size={30}
        />

        {notifications.length > 0 && (

          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">

            {notifications.length}

          </div>

        )}

      </button>

      {/* DROPDOWN */}

      {open && (

        <div className="absolute right-0 mt-4 w-96 bg-black border border-green-500 rounded-2xl shadow-2xl p-4 z-50">

          <h2 className="text-green-400 text-2xl font-bold mb-4">

            Notifications

          </h2>

          {notifications.length === 0 ? (

            <p className="text-gray-400">

              No Notifications

            </p>

          ) : (

            <div className="space-y-4 max-h-96 overflow-y-auto">

              {notifications.map(
                (
                  item,
                  index
                ) => (

                  <div
                    key={index}
                    className="bg-white/5 border border-green-500/20 rounded-xl p-4"
                  >

                    <p className="text-white">

                      {item.message}

                    </p>

                    <p className="text-gray-400 text-sm mt-2">

                      {item.time}

                    </p>

                  </div>

                )
              )}

            </div>

          )}

        </div>

      )}

    </div>

  );

}

export default NotificationBell;