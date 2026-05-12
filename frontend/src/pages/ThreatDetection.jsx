import { useState } from "react";
import axios from "axios";

function ThreatDetection() {

  const [text, setText] = useState("");

  const [loading, setLoading] =
    useState(false);

  const [result, setResult] =
    useState(null);

  const scanThreat = async () => {

    if (!text) {

      alert("Enter URL or Message");

      return;

    }

    try {

      setLoading(true);

      // SIMPLE AI LOGIC

      const lowerText =
        text.toLowerCase();

      let risk = "Low";

      let message =
        "Safe Content";

      if (
        lowerText.includes("otp") ||
        lowerText.includes("upi") ||
        lowerText.includes("bank") ||
        lowerText.includes("verify") ||
        lowerText.includes("click") ||
        lowerText.includes("password") ||
        lowerText.includes("lottery") ||
        lowerText.includes("urgent")
      ) {

        risk = "High";

        message =
          "Possible Scam / Phishing Detected";

      }

      setResult({
        risk,
        message,
      });

    } catch (error) {

      console.log(error);

      alert("Scan Failed");

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="min-h-screen bg-black text-white p-10">

      <div className="max-w-4xl mx-auto backdrop-blur-xl bg-white/5 border border-green-500/30 rounded-3xl p-10">

        <h1 className="text-5xl font-bold text-green-400 mb-10 text-center">

          AI Threat Scanner

        </h1>

        <textarea
          value={text}
          onChange={(e) =>
            setText(e.target.value)
          }
          placeholder="Paste suspicious URL, message, email, or text..."
          className="w-full h-64 bg-black border border-green-500 rounded-2xl p-6 text-lg outline-none"
        />

        <button
          onClick={scanThreat}
          className="w-full mt-8 bg-green-500 text-black py-4 rounded-2xl font-bold text-xl hover:bg-green-400 transition duration-300"
        >

          {loading
            ? "Scanning..."
            : "Scan Threat"}

        </button>

        {result && (

          <div className="mt-10 border border-green-500 rounded-2xl p-8 bg-black">

            <h2 className="text-3xl font-bold mb-4 text-green-400">

              Scan Result

            </h2>

            <p className="text-xl mb-3">

              <strong>Threat Level:</strong>{" "}

              <span
                className={
                  result.risk === "High"
                    ? "text-red-500"
                    : "text-green-400"
                }
              >

                {result.risk}

              </span>

            </p>

            <p className="text-lg">

              {result.message}

            </p>

          </div>

        )}

      </div>

    </div>

  );

}

export default ThreatDetection;