import { useState } from "react";
import Tesseract from "tesseract.js";

function OCRScanner() {

  const [image, setImage] = useState(null);

  const [loading, setLoading] = useState(false);

  const [text, setText] = useState("");

  const [result, setResult] = useState("");

  const detectScam = (content) => {

    const lowerText = content.toLowerCase();

    if (
      lowerText.includes("otp") ||
      lowerText.includes("bank") ||
      lowerText.includes("upi") ||
      lowerText.includes("lottery") ||
      lowerText.includes("claim reward") ||
      lowerText.includes("urgent payment") ||
      lowerText.includes("click link")
    ) {

      return "⚠️ High Scam Risk Detected";

    }

    return "✅ No Major Scam Detected";

  };

  const scanImage = async () => {

    if (!image) {

      alert("Upload Image First");

      return;

    }

    setLoading(true);

    const data = await Tesseract.recognize(
      image,
      "eng"
    );

    const extractedText = data.data.text;

    setText(extractedText);

    setResult(detectScam(extractedText));

    setLoading(false);

  };

  return (

    <div className="min-h-screen bg-black text-white p-10">

      <div className="max-w-4xl mx-auto bg-white/5 border border-green-500/30 rounded-3xl p-8 backdrop-blur-xl">

        <h1 className="text-5xl font-bold text-green-400 mb-8">

          AI OCR Scam Detector

        </h1>

        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            setImage(e.target.files[0])
          }
          className="mb-6"
        />

        <button
          onClick={scanImage}
          className="bg-green-500 text-black px-8 py-3 rounded-xl font-bold hover:bg-green-400"
        >

          {loading
            ? "Scanning..."
            : "Scan Image"}

        </button>

        {text && (

          <div className="mt-10">

            <h2 className="text-3xl text-green-400 mb-4">

              Extracted Text

            </h2>

            <div className="bg-black border border-green-500 p-5 rounded-xl whitespace-pre-wrap">

              {text}

            </div>

          </div>

        )}

        {result && (

          <div className="mt-8">

            <h2 className="text-3xl text-yellow-400 mb-4">

              AI Detection Result

            </h2>

            <div className="bg-black border border-yellow-500 p-5 rounded-xl text-xl font-bold">

              {result}

            </div>

          </div>

        )}

      </div>

    </div>

  );

}

export default OCRScanner;