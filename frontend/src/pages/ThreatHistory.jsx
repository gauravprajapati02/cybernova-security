import { useEffect, useState } from "react";

import axios from "axios";

function ThreatHistory() {

  const [history, setHistory] =
    useState([]);

  const user =
    JSON.parse(
      localStorage.getItem("user")
    );

  useEffect(() => {

    fetchHistory();

  }, []);

  const fetchHistory = async () => {

    try {

      const res = await axios.get(

        `https://cybernova-api.onrender.com/api/threats/user/${user.email}`

      );

      setHistory(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl text-green-400 font-bold mb-10">

        Threat Scan History

      </h1>

      <div className="grid gap-8">

        {history.map((item) => (

          <div
            key={item._id}
            className="bg-white/5 border border-green-500/30 rounded-3xl p-8"
          >

            <p className="mb-3">

              <strong>
                Category:
              </strong>

              {" "}
              {item.category}

            </p>

            <p className="mb-3">

              <strong>
                Threat Level:
              </strong>

              {" "}

              <span className="text-red-400">

                {item.level}

              </span>

            </p>

            <p className="mb-3">

              <strong>
                Confidence:
              </strong>

              {" "}
              {item.confidence}%

            </p>

            <p className="mb-3">

              <strong>
                Summary:
              </strong>

              {" "}
              {item.summary}

            </p>

          </div>

        ))}

      </div>

    </div>

  );

}

export default ThreatHistory;