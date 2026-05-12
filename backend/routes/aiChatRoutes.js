const express = require("express");

const router = express.Router();

const axios = require("axios");

router.post("/", async (req, res) => {

  try {

    const { message } = req.body;

    const response =
      await axios.post(

        "https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent",

        {
          contents: [

            {
              parts: [

                {
                  text: `

You are CyberShield AI Assistant.

You help users with:
- cyber crime
- phishing
- scams
- hacking
- fraud
- online safety
- cybersecurity
- general questions

Give short professional answers.

Question:
${message}

`,
                },

              ],
            },

          ],
        },

        {
          headers: {

            "Content-Type":
              "application/json",

            "X-goog-api-key":
              process.env.GEMINI_API_KEY,

          },
        }

      );

    const reply =
      response.data.candidates[0]
      .content.parts[0].text;

    res.json({

      reply,

    });

  } catch (error) {

    console.log(error.response?.data || error);

    res.status(500).json({

      reply:
        "AI Server Error",

    });

  }

});

module.exports = router;