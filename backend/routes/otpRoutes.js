const express = require("express");

const nodemailer = require("nodemailer");

const otpGenerator = require("otp-generator");

const Otp = require("../models/Otp");

const router = express.Router();


// SEND OTP
router.post("/send-otp", async (req, res) => {

  try {

    const { email } = req.body;

    console.log("OTP Request For:", email);

    const otp = otpGenerator.generate(6, {

      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,

    });

    console.log("Generated OTP:", otp);

    await Otp.create({

      email,
      otp,

    });

    const transporter = nodemailer.createTransport({

      service: "gmail",

      auth: {

        user: process.env.EMAIL_USER,

        pass: process.env.EMAIL_PASS,

      },

    });

    await transporter.sendMail({

      from: process.env.EMAIL_USER,

      to: email,

      subject: "Cyber Crime System OTP Verification",

      text: `Your OTP is: ${otp}`,

    });

    console.log("OTP Email Sent Successfully");

    res.json({

      message: "OTP Sent Successfully",

    });

  } catch (error) {

    console.log("OTP ERROR:", error);

    res.status(500).json({

      message: "Server Error",

    });

  }

});


// VERIFY OTP
router.post("/verify-otp", async (req, res) => {

  try {

    const { email, otp } = req.body;

    const validOtp = await Otp.findOne({

      email,
      otp,

    });

    if (!validOtp) {

      return res.status(400).json({

        message: "Invalid OTP",

      });

    }

    res.json({

      message: "OTP Verified Successfully",

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      message: "Server Error",

    });

  }

});

module.exports = router;