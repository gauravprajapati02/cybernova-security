import { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {

    e.preventDefault();

    try {

        const res = await axios.post(
            "http://localhost:3001/api/auth/register",
            {
                name,
                email,
                password,
            }
        );

        console.log(res.data);

        alert("Registration Successful");

        navigate("/login");

    } catch (error) {

        console.log(error);

        if (error.response) {
            alert(error.response.data.message);
        } else {
            alert("Server Error");
        }

    }

};
  return (

    <div className="min-h-screen flex items-center justify-center px-6">

      <div className="backdrop-blur-xl bg-white/5 border border-green-500/30 p-10 rounded-3xl shadow-2xl w-full max-w-md">

        <h1 className="text-5xl font-bold text-green-400 text-center mb-10">

          Sign Up

        </h1>

        <form
          onSubmit={handleRegister}
          className="space-y-6"
        >

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="w-full p-4 rounded-xl bg-black/40 border border-green-500/30 text-white outline-none"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full p-4 rounded-xl bg-black/40 border border-green-500/30 text-white outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full p-4 rounded-xl bg-black/40 border border-green-500/30 text-white outline-none"
          />

          <button
            type="submit"
            className="w-full bg-green-500 text-black py-4 rounded-xl font-bold hover:bg-green-400 hover:scale-105 transition duration-300"
          >

            Create Account

          </button>

        </form>

      </div>

    </div>

  );

}

export default Register;