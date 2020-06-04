const fg = require("fast-glob");
const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 3000;

app.use(cors());
app.use("/static", express.static("static"));
app.get("/api/images", async (req, res) => {
  const images = await fg("*.{jpeg, jpg, png, gif}", { cwd: "static" });
  res.json({
    data: images,
    prefix: "/static/",
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
