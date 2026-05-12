import { useEffect, useState } from "react";

import axios from "axios";

function Status() {

  const [complaints, setComplaints] = useState([]);

  useEffect(() => {

    fetchComplaints();

  }, []);

  const fetchComplaints = async () => {

    try {

      const res = await axios.get(
        "https://cybershield-ai-a1lg.onrender.com/api/complaints"
      );

      setComplaints(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="bg-black min-h-screen text-white p-10">

      <h1 className="text-5xl text-green-400 font-bold mb-10">
        Complaint Status
      </h1>

      <div className="grid gap-6">

        {complaints.map((item) => (

          <div
            key={item._id}
            className="bg-gray-900 p-6 rounded-xl border border-green-500"
          >

            <h2 className="text-2xl text-green-400 mb-3">
              {item.category}
            </h2>

            <p className="text-gray-300 mb-4">
              {item.description}
            </p>

            <span className="bg-green-500 text-black px-4 py-2 rounded-lg font-bold">
              {item.status}
            </span>

          </div>

        ))}

      </div>

    </div>

  );

}

export default Status;