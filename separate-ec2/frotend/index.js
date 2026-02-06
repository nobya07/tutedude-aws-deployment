const express = require("express");
const fetch = require("node-fetch");

const app = express();

app.get("/status", async (req, res) => {
  try {
    const response = await fetch(
      "http://13.204.67.103:5000/api/health"
    );
    const text = await response.text();
    res.send(text);
  } catch {
    res.send("Backend not reachable");
  }
});

app.listen(3000, () => {
  console.log("Frontend running on port 3000");
});
