import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";

import Sidebar from "../components/Sidebar";
import GenerateReport from "../components/GenerateReport";
import StatsChart from "../components/StatsChart";

function Dashboard() {

    const [complaints, setComplaints] = useState([]);
    const [search, setSearch] = useState("");

    const fetchComplaints = useCallback(async () => {

        try {

            const res = await axios.get(
                "https://cybernova-api.onrender.comapi/complaints"
            );

            setComplaints(res.data);

        } catch (error) {

            console.log(error);

        }

    }, []);

    useEffect(() => {

        fetchComplaints();

    }, [fetchComplaints]);

    const filteredComplaints = complaints.filter((item) =>
        item.name?.toLowerCase().includes(search.toLowerCase()) ||
        item.complaintType?.toLowerCase().includes(search.toLowerCase()) ||
        item.status?.toLowerCase().includes(search.toLowerCase())
    );

    return (

        <div className="flex bg-black text-white min-h-screen">

            <Sidebar />

            <div className="flex-1 p-6">

                <h1 className="text-4xl font-bold text-green-400 mb-6">
                    Admin Investigation Dashboard
                </h1>

                <div className="grid md:grid-cols-3 gap-4 mb-8">

                    <div className="bg-gray-900 p-5 rounded-xl border border-green-500">
                        <h2 className="text-lg">Total Complaints</h2>

                        <p className="text-3xl font-bold text-green-400">
                            {complaints.length}
                        </p>
                    </div>

                    <div className="bg-gray-900 p-5 rounded-xl border border-yellow-500">
                        <h2 className="text-lg">Pending Cases</h2>

                        <p className="text-3xl font-bold text-yellow-400">
                            {
                                complaints.filter(
                                    (item) => item.status === "Pending"
                                ).length
                            }
                        </p>
                    </div>

                    <div className="bg-gray-900 p-5 rounded-xl border border-blue-500">
                        <h2 className="text-lg">Resolved Cases</h2>

                        <p className="text-3xl font-bold text-blue-400">
                            {
                                complaints.filter(
                                    (item) => item.status === "Resolved"
                                ).length
                            }
                        </p>
                    </div>

                </div>

                <StatsChart complaints={complaints} />

                <div className="my-6">

                    <input
                        type="text"
                        placeholder="Search complaints..."
                        className="w-full p-3 rounded-lg bg-gray-900 border border-green-500 outline-none"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                </div>

                <div className="overflow-x-auto">

                    <table className="w-full border border-green-500">

                        <thead className="bg-green-600 text-black">

                            <tr>

                                <th className="p-3 border">
                                    Complaint No.
                                </th>

                                <th className="p-3 border">
                                    Name
                                </th>

                                <th className="p-3 border">
                                    Type
                                </th>

                                <th className="p-3 border">
                                    Status
                                </th>

                                <th className="p-3 border">
                                    Date
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {filteredComplaints.map((item, index) => (

                                <tr
                                    key={index}
                                    className="text-center bg-gray-900 hover:bg-gray-800"
                                >

                                    <td className="p-3 border">
                                        {item.complaintNumber}
                                    </td>

                                    <td className="p-3 border">
                                        {item.name}
                                    </td>

                                    <td className="p-3 border">
                                        {item.complaintType}
                                    </td>

                                    <td className="p-3 border">
                                        {item.status}
                                    </td>

                                    <td className="p-3 border">
                                        {new Date(
                                            item.createdAt
                                        ).toLocaleDateString()}
                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

                <div className="mt-8">

                    <GenerateReport complaints={complaints} />

                </div>

            </div>

        </div>
    );
}

export default Dashboard;