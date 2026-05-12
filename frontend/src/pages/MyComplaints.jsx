import { useEffect, useState } from "react";

import axios from "axios";
const API = process.env.REACT_APP_API_URL;
function MyComplaints() {

  const [complaints, setComplaints] =
    useState([]);

  useEffect(() => {

    fetchComplaints();

  }, []);

  const fetchComplaints = async () => {

    try {

      const user =
        JSON.parse(
          localStorage.getItem("user")
        );

      if (!user?.email) {

        return;

      }

    const res = await axios.get(
  `${API}/api/complaints/user/${user.email}`
);

      console.log(res.data);

      setComplaints(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl text-green-400 font-bold mb-10">

        My Complaint History

      </h1>

      <div className="grid gap-8">

        {complaints.length > 0 ? (

          complaints.map((item) => (

            <div
              key={item._id}
              className="bg-white/5 border border-green-500/30 p-8 rounded-3xl shadow-2xl"
            >

              <div className="grid md:grid-cols-2 gap-6">

                <div>

                  <p className="mb-3">

                    <strong>Complaint ID:</strong>
                    {" "}
                    {item.complaintId}

                  </p>

                  <p className="mb-3">

                    <strong>Category:</strong>
                    {" "}
                    {item.category}

                  </p>

                  <p className="mb-3">

                    <strong>Status:</strong>
                    {" "}

                    <span className="text-green-400 font-bold">

                      {item.status}

                    </span>

                  </p>

                </div>

                <div>

                  <p className="mb-3">

                    <strong>Description:</strong>
                    {" "}
                    {item.description}

                  </p>

                </div>

              </div>

            </div>

          ))

        ) : (

          <div className="text-center mt-20">

            <h2 className="text-3xl text-red-500">

              No Complaints Found

            </h2>

          </div>

        )}

      </div>

    </div>

  );

}

export default MyComplaints;