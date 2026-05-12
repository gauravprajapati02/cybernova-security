const express = require("express");

const router = express.Router();

const multer = require("multer");

const path = require("path");

const Complaint =
  require("../models/Complaint");
const transporter =
require("../config/mail");

// MULTER STORAGE

const storage = multer.diskStorage({

  destination: function (
    req,
    file,
    cb
  ) {

    cb(null, "uploads/");

  },

  filename: function (
    req,
    file,
    cb
  ) {

    cb(

      null,

      Date.now() +

        path.extname(
          file.originalname
        )

    );

  },

});

const upload = multer({
  storage,
});


// REGISTER COMPLAINT

router.post(

  "/",

  upload.single("evidence"),

  async (req, res) => {

    try {

      const {

        userId,
        name,
        email,
        phone,
        category,
        description,

      } = req.body;

      const complaintId =

        "CC-" +

        Math.floor(
          100000 +
            Math.random() * 900000
        );

      const complaint =
        await Complaint.create({

          userId,

          complaintId,

          name,

          email,

          phone,

          category,

          description,

          evidence:
            req.file
              ? req.file.filename
              : "",

          status: "Pending",

        });
await transporter.sendMail({

  from:
    process.env.EMAIL_USER,

  to: email,

  subject:
    "Cyber Complaint Registered",

  html: `

    <div style="font-family:Arial;padding:20px;background:#000;color:#fff;">

      <h1 style="color:#00ff99;">
        CyberShield AI
      </h1>

      <h2>
        Complaint Registered Successfully
      </h2>

      <p>
        Your complaint has been registered.
      </p>

      <h3>
        Complaint ID:
        ${complaintId}
      </h3>

      <p>
        Status:
        Pending
      </p>

      <p>
        Thank you for reporting cyber crime.
      </p>

    </div>

  `,

});
      res.status(201).json({

        success: true,

        complaintId:
          complaint.complaintId,

        complaint,

      });

    } catch (error) {

      console.log(error);

      res.status(500).json({

        success: false,

        message:
          "Complaint Submission Failed",

      });

    }

  }

);


// GET ALL COMPLAINTS

router.get("/", async (req, res) => {

  try {

    const complaints =
      await Complaint.find().sort({
        createdAt: -1,
      });

    res.json(complaints);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });

  }

});


// UPDATE STATUS

router.put("/:id", async (req, res) => {

  try {

    const complaint =
      await Complaint.findByIdAndUpdate(

        req.params.id,

        {
          status:
            req.body.status,
        },

        {
          new: true,
        }

      );

    res.json(complaint);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });

  }

});


// TRACK COMPLAINT

router.get(

  "/track/:id",

  async (req, res) => {

    try {

      const complaint =
        await Complaint.findOne({

          complaintId:
            req.params.id,

        });

      if (!complaint) {

        return res
          .status(404)
          .json({

            message:
              "Complaint Not Found",

          });

      }

      res.json(complaint);

    } catch (error) {

      console.log(error);

      res.status(500).json({
        message:
          "Server Error",
      });

    }

  }

);

module.exports = router;