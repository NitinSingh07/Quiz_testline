const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
app.use(
  cors({
    origin: "http://localhost:5174",
  })
);

app.get("/api/quiz", async (req, res) => {
  try {
    const response = await fetch("https://api.jsonserve.com/Uw5CrX");
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch quiz data" });
  }
});

app.listen(5000, () => console.log("Proxy server running on port 5000"));
