from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/api/health")
def health():
    return "Status: Flask backend running locally"

if __name__ == "__main__":
    app.run(port=5000,host="0.0.0.0", debug=True )
