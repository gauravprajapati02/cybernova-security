const express = require("express");

const multer = require("multer");

const path = require("path");

const User = require("../models/User");

const router = express.Router();

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

router.post(

  "/avatar",

  upload.single("avatar"),

  async (req, res) => {

    try {

      console.log(req.file);

      const { userId } =
        req.body;

      if (!req.file) {

        return res
          .status(400)
          .json({
            message:
              "No File Uploaded",
          });

      }

      const avatar =
        `http://localhost:3001/uploads/${req.file.filename}`;

      const updatedUser =
        await User.findByIdAndUpdate(

          userId,

          { avatar },

          { new: true }

        );

      res.json({
        success: true,
        user: updatedUser,
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        message:
          "Upload Failed",
      });

    }

  }

);

module.exports = router;