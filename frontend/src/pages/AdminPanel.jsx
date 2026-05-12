import { useEffect, useState } from "react";

import axios from "axios";

import Sidebar from "../components/Sidebar";

import StatsChart from "../components/StatsChart";

function AdminPanel() {

  const [complaints, setComplaints] =
    useState([]);

  useEffect(() => {

    fetchComplaints();

  }, []);

  const fetchComplaints = async () => {

    try {

      const res = await axios.get(
        "http://localhost:3001/api/complaints"
      );

      console.log(res.data);

      setComplaints(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  const updateStatus = async (
    id,
    status
  ) => {

    try {

      await axios.put(
        `http://localhost:3001/api/complaints/${id}`,
        { status }
      );

      fetchComplaints();

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="flex bg-black text-white min-h-screen">

      <Sidebar />

      <div className="flex-1 p-10">

        <h1 className="text-5xl text-green-400 font-bold mb-10">

          Admin Investigation Panel

        </h1>

        {/* CHART */}

        <div className="mb-12">

          <StatsChart
            complaints={complaints}
          />

        </div>

        {/* COMPLAINTS */}

        <div className="grid gap-8">

          {complaints.length > 0 ? (

            complaints.map((item) => (

              <div
                key={item._id}
                className="bg-white/5 border border-green-500/30 p-8 rounded-3xl"
              >

                <div className="grid md:grid-cols-2 gap-6">

                  <div>

                    <p className="mb-2">
                      <strong>Name:</strong>
                      {" "}
                      {item.name}
                    </p>

                    <p className="mb-2">
                      <strong>Email:</strong>
                      {" "}
                      {item.email}
                    </p>

                    <p className="mb-2">
                      <strong>Phone:</strong>
                      {" "}
                      {item.phone}
                    </p>

                    <p className="mb-2">
                      <strong>Complaint ID:</strong>
                      {" "}
                      {item.complaintId}
                    </p>

                  </div>

                  <div>

                    <p className="mb-2">
                      <strong>Category:</strong>
                      {" "}
                      {item.category}
                    </p>

                    <p className="mb-2">
                      <strong>Description:</strong>
                      {" "}
                      {item.description}
                    </p>

                    <p className="mb-2">
                      <strong>Status:</strong>
                    </p>

                    <select
                      value={item.status}
                      onChange={(e) =>
                        updateStatus(
                          item._id,
                          e.target.value
                        )
                      }
                      className="bg-black border border-green-500 p-3 rounded-xl"
                    >

                      <option value="Pending">
                        Pending
                      </option>

                      <option value="Investigating">
                        Investigating
                      </option>

                      <option value="Resolved">
                        Resolved
                      </option>

                    </select>

                  </div>

                </div>

              </div>

            ))

          ) : (

            <h2 className="text-2xl text-red-500">

              No Complaints Found

            </h2>

          )}

        </div>

      </div>

    </div>

  );

}

export default AdminPanel;