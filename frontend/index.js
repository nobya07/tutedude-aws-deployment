const express = require("express");
const path = require("path");

const app = express();

// serve static files
app.use(express.static(path.join(__dirname, "public")));

// API call to Flask backend
app.get("/status", async (req, res) => {
  try {
    const response = await fetch("http://localhost:5000/api/health");
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Backend not reachable" });
  }
});

app.listen(3000, () => {
  console.log("🚀 Express frontend running on port 3000");
});
