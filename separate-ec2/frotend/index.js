const express = require("express");

console.log("Starting frontend...");

const app = express();

app.get("/status", async (req, res) => {
  try {
    const response = await fetch("http://13.204.67.103:5000/api/health");
    const text = await response.text();
    res.send(text);
  } catch (err) {
    console.error(err);
    res.status(500).send("Backend not reachable");
  }
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Frontend running on port 3000");
});
