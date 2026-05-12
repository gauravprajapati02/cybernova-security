import { useState } from "react";

import axios from "axios";
const API = process.env.REACT_APP_API_URL;
function Profile() {

  const storedUser =
    JSON.parse(
      localStorage.getItem("user")
    );

  const [user, setUser] =
    useState(storedUser);

  const handleUpload = async (
    e
  ) => {

    const file =
      e.target.files[0];

    const formData =
      new FormData();

    formData.append(
      "avatar",
      file
    );

    formData.append(
      "userId",
      user._id
    );

    try {

    const res =
  await axios.post(
    `${API}/api/upload/avatar`,
    formData
  );

      localStorage.setItem(

        "user",

        JSON.stringify(
          res.data.user
        )

      );

      setUser(res.data.user);

      alert(
        "Avatar Updated"
      );

    } catch (error) {

      console.log(error);

      alert(
        "Upload Failed"
      );

    }

  };

  return (

    <div className="min-h-screen bg-black text-white p-10">

      <div className="max-w-xl mx-auto bg-white/5 border border-green-500/30 rounded-3xl p-10 text-center">

        <img
          src={
            user.avatar ||
            "https://cdn-icons-png.flaticon.com/512/149/149071.png"
          }
          alt=""
          className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-green-500 object-cover"
        />

        <h1 className="text-4xl text-green-400 font-bold mb-4">

          {user.name}

        </h1>

        <p className="mb-6">

          {user.email}

        </p>

        <input
          type="file"
          onChange={
            handleUpload
          }
          className="text-white"
        />

      </div>

    </div>

  );

}

export default Profile;