import { useState } from "react";

function CyberChatbot() {

  const [message, setMessage] =
    useState("");

  const [chat, setChat] =
    useState([]);

  const getBotReply = (
    text
  ) => {

    const msg =
      text.toLowerCase();

    // OTP

    if (
      msg.includes("otp")
    ) {

      return "OTP sirf aapke liye hota hai. Kisi bhi caller, app ya website ko OTP share na karein.";

    }

    // UPI

    if (
      msg.includes("upi") ||
      msg.includes("payment")
    ) {

      return "UPI scam se bachne ke liye unknown payment requests accept na karein aur PIN kabhi share na karein.";

    }

    // PHISHING

    if (
      msg.includes("phishing") ||
      msg.includes("fake")
    ) {

      return "Phishing attacks fake emails aur fake login pages ke through hote hain. Suspicious links avoid karein.";

    }

    // PASSWORD

    if (
      msg.includes("password")
    ) {

      return "Strong password me uppercase, lowercase, numbers aur symbols hone chahiye.";

    }

    // COMPLAINT

    if (
      msg.includes("complaint")
    ) {

      return "Cyber complaint register karne ke liye Complaint page par jaakar details submit karein.";

    }

    // HELLO

    if (
      msg.includes("hi") ||
      msg.includes("hello")
    ) {

      return "Hello 👋 Welcome to CyberShield AI Assistant. Main cyber security guidance provide karta hoon.";

    }

    // DEFAULT

    return "Cyber safety ke liye suspicious links, fake apps aur OTP sharing se bachkar rahein.";

  };

  const sendMessage = () => {

    if (!message.trim())
      return;

    const userMessage = {

      sender: "user",

      text: message,

    };

    const botReply = {

      sender: "bot",

      text: getBotReply(
        message
      ),

    };

    setChat((prev) => [

      ...prev,

      userMessage,

      botReply,

    ]);

    setMessage("");

  };

  return (

    <div className="min-h-screen bg-black text-white flex justify-center items-center p-6">

      <div className="w-full max-w-4xl bg-white/5 border border-green-500/30 rounded-3xl p-8">

        <h1 className="text-5xl font-bold text-green-400 text-center mb-8">

          AI Cyber Assistant

        </h1>

        {/* CHAT AREA */}

        <div className="h-[500px] overflow-y-auto bg-black border border-green-500 rounded-2xl p-5 mb-6">

          {chat.length === 0 && (

            <div className="text-center text-gray-400 mt-20">

              Ask about:
              OTP,
              phishing,
              UPI scam,
              passwords,
              cyber fraud etc.

            </div>

          )}

          {chat.map(
            (
              item,
              index
            ) => (

              <div
                key={index}
                className={`flex mb-5 ${
                  item.sender ===
                  "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >

                <div
                  className={`max-w-[75%] px-5 py-4 rounded-2xl ${
                    item.sender ===
                    "user"
                      ? "bg-green-500 text-black"
                      : "bg-gray-800 border border-green-500 text-white"
                  }`}
                >

                  {item.text}

                </div>

              </div>

            )
          )}

        </div>
{/* QUESTION SUGGESTIONS */}

<div className="flex flex-wrap gap-3 mb-5">

  <button
    onClick={() =>
      setMessage(
        "What is OTP fraud?"
      )
    }
    className="bg-gray-800 border border-green-500 px-4 py-2 rounded-xl hover:bg-green-500 hover:text-black transition"
  >

    OTP Fraud

  </button>

  <button
    onClick={() =>
      setMessage(
        "What is UPI scam?"
      )
    }
    className="bg-gray-800 border border-green-500 px-4 py-2 rounded-xl hover:bg-green-500 hover:text-black transition"
  >

    UPI Scam

  </button>

  <button
    onClick={() =>
      setMessage(
        "What is phishing?"
      )
    }
    className="bg-gray-800 border border-green-500 px-4 py-2 rounded-xl hover:bg-green-500 hover:text-black transition"
  >

    Phishing

  </button>

  <button
    onClick={() =>
      setMessage(
        "How to create strong password?"
      )
    }
    className="bg-gray-800 border border-green-500 px-4 py-2 rounded-xl hover:bg-green-500 hover:text-black transition"
  >

    Strong Password

  </button>

</div>
        {/* INPUT */}

        <div className="flex gap-4">

          <input
            type="text"
            value={message}
            onChange={(e) =>
              setMessage(
                e.target.value
              )
            }
            onKeyDown={(e) => {

              if (
                e.key ===
                "Enter"
              ) {

                sendMessage();

              }

            }}
            placeholder="Ask cyber security questions..."
            className="flex-1 bg-black border border-green-500 rounded-2xl px-5 py-4 outline-none"
          />

          <button
            onClick={
              sendMessage
            }
            className="bg-green-500 text-black px-8 py-4 rounded-2xl font-bold hover:bg-green-400"
          >

            Send

          </button>

        </div>

      </div>

    </div>

  );

}

export default CyberChatbot;