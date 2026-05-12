import { useState } from "react";

import axios from "axios";

function Complaint() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const [name, setName] =
    useState("");

  const [email] =
    useState(user?.email || "");

  const [phone, setPhone] =
    useState("");

  const [category, setCategory] =
    useState("Phishing");

  const [description, setDescription] =
    useState("");

  const [file, setFile] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      const formData =
        new FormData();

      formData.append(
        "userId",
        user._id
      );

      formData.append(
        "name",
        name
      );

      formData.append(
        "email",
        email
      );

      formData.append(
        "phone",
        phone
      );

      formData.append(
        "category",
        category
      );

      formData.append(
        "description",
        description
      );

      if (file) {

        formData.append(
          "evidence",
          file
        );

      }

      const res =
        await axios.post(

          "http://localhost:3001/api/complaints",

          formData,

          {
            headers: {

              "Content-Type":
                "multipart/form-data",

            },
          }

        );

      // NOTIFICATION

      const notifications =

        JSON.parse(
          localStorage.getItem(
            "notifications"
          )
        ) || [];

      notifications.unshift({

        message:

          `Complaint Registered Successfully | ID: ${res.data.complaintId}`,

        time:
          new Date().toLocaleString(),

      });

      localStorage.setItem(

        "notifications",

        JSON.stringify(
          notifications
        )

      );

      alert(

        `Complaint Submitted Successfully\nComplaint ID: ${res.data.complaintId}`

      );

      setName("");

      setPhone("");

      setCategory("Phishing");

      setDescription("");

      setFile(null);

    } catch (error) {

      console.log(error);

      alert(
        "Submission Failed"
      );

    }

    setLoading(false);

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-black px-6 py-10">

      <div className="w-full max-w-4xl bg-white/5 border border-green-500/30 backdrop-blur-xl rounded-3xl p-10 shadow-2xl">

        <h1 className="text-5xl font-bold text-center text-green-400 mb-10">

          Register Cyber Complaint

        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) =>
              setName(
                e.target.value
              )
            }
            className="w-full p-4 rounded-xl bg-black/40 border border-green-500/30 text-white outline-none"
            required
          />

          <input
            type="email"
            value={email}
            readOnly
            className="w-full p-4 rounded-xl bg-black/40 border border-green-500/30 text-white outline-none"
          />

          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) =>
              setPhone(
                e.target.value
              )
            }
            className="w-full p-4 rounded-xl bg-black/40 border border-green-500/30 text-white outline-none"
            required
          />

          <select
            value={category}
            onChange={(e) =>
              setCategory(
                e.target.value
              )
            }
            className="w-full p-4 rounded-xl bg-black/40 border border-green-500/30 text-white outline-none"
          >

            <option value="Phishing">
  Phishing
</option>

<option value="Online Fraud">
  Online Fraud
</option>

<option value="UPI Scam">
  UPI Scam
</option>

<option value="OTP Scam">
  OTP Scam
</option>

<option value="KYC Fraud">
  KYC Fraud
</option>

<option value="Banking Fraud">
  Banking Fraud
</option>

<option value="Credit Card Fraud">
  Credit Card Fraud
</option>

<option value="Fake Loan App">
  Fake Loan App
</option>

<option value="Job Scam">
  Job Scam
</option>

<option value="Lottery Scam">
  Lottery Scam
</option>

<option value="Crypto Scam">
  Crypto Scam
</option>

<option value="Social Media Hack">
  Social Media Hack
</option>

<option value="Fake Website">
  Fake Website
</option>

<option value="Cyber Bullying">
  Cyber Bullying
</option>

<option value="Identity Theft">
  Identity Theft
</option>

<option value="Tech Support Scam">
  Tech Support Scam
</option>

<option value="Investment Fraud">
  Investment Fraud
</option>

<option value="Data Breach">
  Data Breach
</option>

<option value="Email Spoofing">
  Email Spoofing
</option>

<option value="Ransomware Attack">
  Ransomware Attack
</option>

          </select>

          <textarea
            rows="6"
            placeholder="Describe your complaint..."
            value={description}
            onChange={(e) =>
              setDescription(
                e.target.value
              )
            }
            className="w-full p-4 rounded-xl bg-black/40 border border-green-500/30 text-white outline-none"
            required
          />

          <input
            type="file"
            onChange={(e) =>
              setFile(
                e.target.files[0]
              )
            }
            className="text-white"
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-4 rounded-2xl font-bold text-lg transition duration-300 ${
              loading
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-400 hover:scale-105 text-black"
            }`}
          >

            {loading
              ? "Submitting..."
              : "Submit Complaint"}

          </button>

        </form>

      </div>

    </div>

  );

}

export default Complaint;