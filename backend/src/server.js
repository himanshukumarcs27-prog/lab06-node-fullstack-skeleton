const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Lab 06: Backend running and GitHub push successful");
});

app.get("/about", (req, res) => {
  res.send("Name: Namita Sharma | Enrollment: CS-23411630 | Section: 3CSE-12");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});