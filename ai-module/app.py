import pytesseract

from PIL import Image
from flask import Flask, request, jsonify

from flask_cors import CORS

app = Flask(__name__)

CORS(app)


# URL THREAT DETECTION
@app.route('/predict', methods=['POST'])

def predict():

    data = request.json

    url = data.get("url")


    suspicious_keywords = [

        "free",
        "login",
        "bank",
        "verify",
        "secure",
        "update",

    ]


    risk_score = 0

    for keyword in suspicious_keywords:

        if keyword in url.lower():

            risk_score += 1


    if risk_score >= 3:

        result = "HIGH RISK"

    elif risk_score >= 1:

        result = "MEDIUM RISK"

    else:

        result = "SAFE"


    return jsonify({

        "url": url,

        "prediction": result,

        "score": risk_score,

    })


# EMAIL PHISHING DETECTION
@app.route('/email-predict', methods=['POST'])

def email_predict():

    data = request.json

    email_text = data.get("email")


    suspicious_words = [

        "urgent",
        "verify",
        "bank",
        "password",
        "click",
        "login",
        "otp",
        "free",

    ]


    risk_score = 0

    for word in suspicious_words:

        if word in email_text.lower():

            risk_score += 1


    if risk_score >= 4:

        result = "PHISHING"

    elif risk_score >= 2:

        result = "SUSPICIOUS"

    else:

        result = "SAFE"


    return jsonify({

        "email": email_text,

        "prediction": result,

        "score": risk_score,

    })
@app.route('/ocr-detect', methods=['POST'])

def ocr_detect():

    try:

        file = request.files['image']

        image = Image.open(file)

        extracted_text = pytesseract.image_to_string(image)

        suspicious_words = [

            "otp",
            "bank",
            "verify",
            "urgent",
            "password",
            "click",
            "free",

        ]

        risk_score = 0

        for word in suspicious_words:

            if word.lower() in extracted_text.lower():

                risk_score += 1

        if risk_score >= 4:

            result = "PHISHING DETECTED"

        elif risk_score >= 2:

            result = "SUSPICIOUS"

        else:

            result = "SAFE"

        return jsonify({

            "text": extracted_text,

            "prediction": result,

            "score": risk_score,

        })

    except Exception as e:

        return jsonify({

            "error": str(e)

        })

if __name__ == '__main__':

    app.run(port=5001)