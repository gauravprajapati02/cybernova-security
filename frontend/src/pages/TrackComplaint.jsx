import { useState } from "react";

import axios from "axios";

function TrackComplaint() {

  const [complaintId, setComplaintId] =
    useState("");

  const [complaint, setComplaint] =
    useState(null);

  const handleTrack = async () => {

    try {

      const res = await axios.get(

        `https://cybernova-api.onrender.comapi/complaints/track/${complaintId}`

      );

      setComplaint(res.data);

    } catch (error) {

      alert("Complaint Not Found");

    }

  };

  return (

    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="w-full max-w-4xl">

        <div className="bg-white/5 border border-green-500/30 rounded-3xl p-10 shadow-2xl backdrop-blur-xl">

          <h1 className="text-5xl text-green-400 font-bold text-center mb-10">

            Track Cyber Complaint

          </h1>

          <div className="flex flex-col md:flex-row gap-5">

            <input
              type="text"
              placeholder="Enter Complaint ID"
              value={complaintId}
              onChange={(e) =>
                setComplaintId(e.target.value)
              }
              className="flex-1 p-5 rounded-2xl bg-black border border-green-500 outline-none"
            />

            <button
              onClick={handleTrack}
              className="bg-green-500 text-black px-10 py-5 rounded-2xl font-bold hover:bg-green-400 transition"
            >

              Track Complaint

            </button>

          </div>

          {complaint && (

            <div className="mt-10 bg-black/40 border border-green-500/30 rounded-3xl p-8">

              <div className="grid md:grid-cols-2 gap-6">

                <div>

                  <p className="mb-4">

                    <strong>Name:</strong>
                    {" "}
                    {complaint.name}

                  </p>

                  <p className="mb-4">

                    <strong>Email:</strong>
                    {" "}
                    {complaint.email}

                  </p>

                  <p className="mb-4">

                    <strong>Phone:</strong>
                    {" "}
                    {complaint.phone}

                  </p>

                </div>

                <div>

                  <p className="mb-4">

                    <strong>Complaint ID:</strong>
                    {" "}
                    {complaint.complaintId}

                  </p>

                  <p className="mb-4">

                    <strong>Category:</strong>
                    {" "}
                    {complaint.category}

                  </p>

                  <p className="mb-4">

                    <strong>Status:</strong>

                    <span className="text-green-400 font-bold ml-2">

                      {complaint.status}

                    </span>

                  </p>

                </div>

              </div>

              <div className="mt-6">

                <p>

                  <strong>Description:</strong>

                </p>

                <p className="mt-2 text-gray-300">

                  {complaint.description}

                </p>

              </div>

            </div>

          )}

        </div>

      </div>

    </div>

  );

}

export default TrackComplaint;