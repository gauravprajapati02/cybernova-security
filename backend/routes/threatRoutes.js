const express = require("express");

const router = express.Router();

const ThreatScan =
require("../models/ThreatScan");


// ANALYZE THREAT

router.post(

  "/analyze",

  async (req, res) => {

    try {

      const {
        text,
        userId,
        email,
      } = req.body;

      let level = "Low";

      let category =
        "Safe Content";

      let confidence = 92;

      let summary =
        "No major cyber threat detected.";

      let recommendations = [

        "Stay alert online",

        "Avoid unknown links",

      ];

      // PHISHING URL

      if (

        text.includes("http") ||

        text.includes(".xyz") ||

        text.includes("bit.ly")

      ) {

        level = "High";

        category =
          "Phishing URL";

        confidence = 98;

        summary =
          "This content contains suspicious links commonly used in phishing attacks and credential theft.";

        recommendations = [

          "Do not open the link",

          "Never enter passwords",

          "Avoid downloading files",

          "Report suspicious sender",

        ];

      }

      // OTP SCAM

      else if (

        text.includes("OTP") ||

        text.includes("verify")

      ) {

        level = "High";

        category =
          "OTP Scam";

        confidence = 95;

        summary =
          "Possible OTP or account verification fraud detected.";

        recommendations = [

          "Never share OTP",

          "Enable two-factor authentication",

          "Block suspicious callers",

        ];

      }

      // BANK / UPI FRAUD

      else if (

        text.includes("bank") ||

        text.includes("UPI") ||

        text.includes("payment")

      ) {

        level = "Medium";

        category =
          "Financial Fraud";

        confidence = 90;

        summary =
          "This content may be related to banking or UPI fraud attempts.";

        recommendations = [

          "Verify transaction source",

          "Contact official bank support",

          "Do not share PIN or OTP",

        ];

      }

      // JOB SCAM

      else if (

        text.includes("job") ||

        text.includes("resume") ||

        text.includes("work from home")

      ) {

        level = "Medium";

        category =
          "Job Scam";

        confidence = 91;

        summary =
          "Possible fake job offer or work-from-home scam detected.";

        recommendations = [

          "Do not pay registration fees",

          "Verify company authenticity",

          "Avoid sharing bank details",

        ];

      }

      // KYC SCAM

      else if (

        text.includes("KYC") ||

        text.includes("PAN") ||

        text.includes("Aadhaar")

      ) {

        level = "High";

        category =
          "KYC Verification Scam";

        confidence = 96;

        summary =
          "Suspicious KYC or identity verification fraud detected.";

        recommendations = [

          "Never share Aadhaar OTP",

          "Verify official sources",

          "Avoid unknown apps",

        ];

      }

      // LOTTERY SCAM

      else if (

        text.includes("lottery") ||

        text.includes("winner") ||

        text.includes("prize")

      ) {

        level = "High";

        category =
          "Lottery Scam";

        confidence = 95;

        summary =
          "Possible fake lottery or reward scam detected.";

        recommendations = [

          "Do not pay claim fees",

          "Ignore suspicious rewards",

          "Block scam contacts",

        ];

      }

      // SOCIAL MEDIA FRAUD

      else if (

        text.includes("Instagram") ||

        text.includes("Facebook") ||

        text.includes("account hacked")

      ) {

        level = "Medium";

        category =
          "Social Media Fraud";

        confidence = 89;

        summary =
          "Possible social media account compromise or impersonation detected.";

        recommendations = [

          "Change passwords immediately",

          "Enable 2FA",

          "Review login devices",

        ];

      }

      // CRYPTO SCAM

      else if (

        text.includes("crypto") ||

        text.includes("bitcoin") ||

        text.includes("investment")

      ) {

        level = "High";

        category =
          "Crypto Investment Scam";

        confidence = 94;

        summary =
          "Potential cryptocurrency or fake investment scam detected.";

        recommendations = [

          "Avoid unknown investment groups",

          "Research platforms carefully",

          "Never transfer crypto blindly",

        ];

      }

      // TECH SUPPORT SCAM

      else if (

        text.includes("Microsoft") ||

        text.includes("support") ||

        text.includes("virus detected")

      ) {

        level = "Medium";

        category =
          "Tech Support Scam";

        confidence = 92;

        summary =
          "Possible fake technical support fraud attempt detected.";

        recommendations = [

          "Do not allow remote access",

          "Close suspicious popups",

          "Use trusted antivirus",

        ];

      }

      // SAVE SCAN HISTORY

      const savedThreat =
        await ThreatScan.create({

          userId,

          email,

          input: text,

          level,

          category,

          confidence,

          summary,

          recommendations,

        });

      res.json(savedThreat);

    } catch (error) {

      console.log(error);

      res.status(500).json({

        message:
          "Threat Analysis Failed",

      });

    }

  }

);


// GET USER HISTORY

router.get(

  "/user/:email",

  async (req, res) => {

    try {

      const history =
        await ThreatScan.find({

          email:
            req.params.email,

        }).sort({
          createdAt: -1,
        });

      res.json(history);

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