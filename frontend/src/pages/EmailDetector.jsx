import { useState } from "react";

import axios from "axios";
const API = process.env.REACT_APP_API_URL;
function EmailDetector() {

    const [email, setEmail] = useState("");

    const [result, setResult] = useState(null);

    const analyzeEmail = async () => {

        try {

            const res = await axios.post(
  `${API}/email-predict`,
  {
    email,
  }
);

            setResult(res.data);

        } catch (error) {

            console.log(error);

            alert("AI Server Error");

        }

    };

    const getThreatColor = () => {

        if (!result) return "";

        if (result.prediction === "PHISHING") {
            return "text-red-500";
        }

        if (result.prediction === "SUSPICIOUS") {
            return "text-yellow-400";
        }

        return "text-green-400";

    };

    return (

        <div className="bg-black min-h-screen text-white p-10">

            <h1 className="text-4xl text-green-400 font-bold mb-8">
                AI Email Phishing Detector
            </h1>

            <div className="bg-gray-900 p-8 rounded-lg max-w-3xl">

                <textarea
                    rows="8"
                    placeholder="Paste suspicious email text here..."
                    value={email}
                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                    className="w-full p-4 rounded bg-black border border-green-500 text-white mb-6"
                />

                <button
                    onClick={analyzeEmail}
                    className="bg-green-500 text-black px-6 py-3 rounded-lg font-bold hover:bg-green-400"
                >
                    Analyze Email
                </button>

                {result && (

                    <div className="mt-8 bg-black p-6 rounded-lg border border-green-500">

                        <h2 className="text-2xl mb-4 text-green-400">
                            Email Analysis Result
                        </h2>

                        <p className="mb-2">
                            <strong>Threat Level:</strong>

                            {" "}

                            <span className={getThreatColor()}>
                                {result.prediction}
                            </span>
                        </p>

                        <p>
                            <strong>Risk Score:</strong>
                            {" "}
                            {result.score}
                        </p>

                    </div>

                )}

            </div>

        </div>

    );

}

export default EmailDetector;