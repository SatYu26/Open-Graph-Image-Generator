// Import and initialize the express app
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// setup GET endpoint
app.get("/ogimage", (req, res) => {
  res.send("OG Imager!");
});

// Listen for requests
app.listen(port, () => {
  console.log(`app listening at ${port}`);
});
