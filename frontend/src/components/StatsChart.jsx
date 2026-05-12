import {

  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,

} from "recharts";

function StatsChart({ complaints }) {

  const statusData = [

    {
      name: "Pending",
      value:

        complaints.filter(
          (c) =>
            c.status === "Pending"
        ).length,
    },

    {
      name: "Investigating",
      value:

        complaints.filter(
          (c) =>
            c.status === "Investigating"
        ).length,
    },

    {
      name: "Resolved",
      value:

        complaints.filter(
          (c) =>
            c.status === "Resolved"
        ).length,
    },

  ];

  const categoryData = [

    {
      category: "Phishing",

      cases:

        complaints.filter(
          (c) =>
            c.category === "Phishing"
        ).length,
    },

    {
      category: "Fraud",

      cases:

        complaints.filter(
          (c) =>
            c.category === "Online Fraud"
        ).length,
    },

    {
      category: "Hacking",

      cases:

        complaints.filter(
          (c) =>
            c.category === "UPI Scam"
        ).length,
    },

  ];

  const COLORS = [
    "#ff4444",
    "#00ff99",
    "#4488ff",
  ];

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

      <div className="bg-black border border-green-500 rounded-3xl p-6">

        <h2 className="text-4xl text-center text-green-400 font-bold mb-6">

          Complaint Status Analytics

        </h2>

        <ResponsiveContainer
          width="100%"
          height={350}
        >

          <PieChart>

            <Pie
              data={statusData}
              dataKey="value"
              outerRadius={120}
              label
            >

              {

                statusData.map(
                  (
                    entry,
                    index
                  ) => (

                    <Cell
                      key={index}
                      fill={
                        COLORS[index]
                      }
                    />

                  )
                )

              }

            </Pie>

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

      </div>

      <div className="bg-black border border-green-500 rounded-3xl p-6">

        <h2 className="text-4xl text-center text-green-400 font-bold mb-6">

          Threat Categories

        </h2>

        <ResponsiveContainer
          width="100%"
          height={350}
        >

          <BarChart
            data={categoryData}
          >

            <CartesianGrid
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="category"
            />

            <YAxis />

            <Tooltip />

            <Legend />

            <Bar
              dataKey="cases"
              fill="#00ff99"
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>

  );

}

export default StatsChart;