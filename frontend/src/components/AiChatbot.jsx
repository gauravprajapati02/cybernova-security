import { useState } from "react";

import {
  FaRobot,
} from "react-icons/fa";

function AiChatbot() {

  const [open, setOpen] =
    useState(false);

  const [messages, setMessages] =
    useState([

      {
        sender: "bot",

        text:
          "Hello 👋 I am CyberShield AI Assistant. Ask me anything about cyber security, phishing, scams, hacking or online safety.",
      },

    ]);

  const [input, setInput] =
    useState("");

  // ADVANCED SMART AI LOGIC
  const getBotReply = (message) => {

    const text =
      message.toLowerCase();

    // HELLO
    if (
      text.includes("hello") ||
      text.includes("hi") ||
      text.includes("hey")
    ) {

      return "Hello 👋 I am CyberShield AI Assistant. Ask me anything about cyber security, scams, hacking or online safety.";

    }

    // PHISHING
    if (
      text.includes("phishing")
    ) {

      return "Phishing is a cyber attack where fake emails, SMS or websites trick users into sharing passwords, OTPs or banking details.";

    }

    // HACKING
    if (
      text.includes("hacking")
    ) {

      return "Hacking means unauthorized access to devices, networks or accounts. Use strong passwords and enable two-factor authentication.";

    }

    // PASSWORD
    if (
      text.includes("password")
    ) {

      return "Use strong passwords with uppercase, lowercase, numbers and symbols. Never reuse passwords across websites.";

    }

    // OTP
    if (
      text.includes("otp")
    ) {

      return "Never share OTP with anyone. Banks and government officials never ask for OTP over calls or messages.";

    }

    // UPI FRAUD
    if (
      text.includes("upi") ||
      text.includes("payment fraud")
    ) {

      return "UPI fraud happens through fake payment requests, QR codes and scam calls. Never approve unknown payment requests.";

    }

    // BANK FRAUD
    if (
      text.includes("bank") ||
      text.includes("banking fraud")
    ) {

      return "Cyber criminals may impersonate bank officials to steal account details. Always verify calls through official bank numbers.";

    }

    // SOCIAL MEDIA
    if (
      text.includes("instagram") ||
      text.includes("facebook") ||
      text.includes("social media")
    ) {

      return "Avoid clicking suspicious social media links and never share personal information publicly online.";

    }

    // RANSOMWARE
    if (
      text.includes("ransomware")
    ) {

      return "Ransomware is malware that locks your files and demands payment. Always keep backups and updated antivirus protection.";

    }

    // MALWARE
    if (
      text.includes("malware") ||
      text.includes("virus")
    ) {

      return "Malware is harmful software that damages systems or steals data. Avoid downloading files from unknown websites.";

    }

    // ANTIVIRUS
    if (
      text.includes("antivirus")
    ) {

      return "Antivirus software helps detect and remove malware, ransomware and viruses from your device.";

    }

    // WIFI
    if (
      text.includes("wifi") ||
      text.includes("wi-fi")
    ) {

      return "Use strong WiFi passwords and WPA2/WPA3 encryption. Avoid using public WiFi for banking transactions.";

    }

    // VPN
    if (
      text.includes("vpn")
    ) {

      return "VPN encrypts internet traffic and improves privacy online, especially when using public networks.";

    }

    // IDENTITY THEFT
    if (
      text.includes("identity theft")
    ) {

      return "Identity theft occurs when criminals misuse your personal data for fraud. Protect Aadhaar, PAN and banking details.";

    }

    // SCAM CALLS
    if (
      text.includes("scam call") ||
      text.includes("fake call")
    ) {

      return "Scam callers may pretend to be bank officers, police or tech support. Never share confidential information over calls.";

    }

    // JOB SCAMS
    if (
      text.includes("job scam")
    ) {

      return "Fake job scams ask for registration fees or personal information. Verify company details before applying.";

    }

    // ONLINE SHOPPING
    if (
      text.includes("shopping fraud")
    ) {

      return "Use trusted websites for online shopping and avoid advance payments to unknown sellers.";

    }

    // CYBER CRIME
    if (
      text.includes("cyber crime")
    ) {

      return "Cyber crime includes hacking, phishing, online fraud, ransomware, identity theft and digital scams.";

    }

    // SAFE INTERNET
    if (
      text.includes("online safety") ||
      text.includes("safe internet")
    ) {

      return "Stay safe online by using strong passwords, avoiding suspicious links and enabling two-factor authentication.";

    }

    // EMAIL FRAUD
    if (
      text.includes("email scam") ||
      text.includes("fake email")
    ) {

      return "Fake emails often contain suspicious links or urgent messages. Always verify sender email addresses carefully.";

    }

    // DEFAULT
    return "I can help with phishing, hacking, UPI fraud, ransomware, malware, passwords, scam calls, identity theft and online safety.";

  };

  // SEND MESSAGE
  const sendMessage = () => {

    if (!input.trim()) return;

    const userMessage = {

      sender: "user",

      text: input,

    };

    const botMessage = {

      sender: "bot",

      text: getBotReply(input),

    };

    setMessages((prev) => [

      ...prev,

      userMessage,

      botMessage,

    ]);

    setInput("");

  };

  return (

    <>

      {/* FLOAT BUTTON */}

      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-green-500 text-black p-5 rounded-full shadow-2xl hover:bg-green-400 z-50"
      >

        <FaRobot className="text-3xl" />

      </button>

      {/* CHAT WINDOW */}

      {open && (

        <div className="fixed bottom-24 right-6 w-96 backdrop-blur-xl bg-black/80 border border-green-500/30 rounded-3xl shadow-2xl z-50 overflow-hidden">

          {/* HEADER */}

          <div className="bg-green-500 text-black p-4 font-bold text-xl">

            CyberShield AI

          </div>

          {/* CHAT AREA */}

          <div className="h-96 overflow-y-auto p-4 space-y-4">

            {messages.map(
              (msg, index) => (

                <div
                  key={index}
                  className={`p-3 rounded-2xl max-w-[80%] ${
                    msg.sender === "user"
                      ? "bg-green-500 text-black ml-auto"
                      : "bg-gray-800 text-white"
                  }`}
                >

                  {msg.text}

                </div>

              )
            )}

          </div>

          {/* INPUT */}

          <div className="flex border-t border-green-500/30">

            <input
              type="text"
              placeholder="Ask about cyber security..."
              value={input}
              onChange={(e) =>
                setInput(e.target.value)
              }
              className="flex-1 p-4 bg-black/40 text-white outline-none"
            />

            <button
              onClick={sendMessage}
              className="bg-green-500 text-black px-5 font-bold"
            >

              Send

            </button>

          </div>

        </div>

      )}

    </>

  );

}

export default AiChatbot;