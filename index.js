const express = require("../node_modules/express");
require("../node_modules/dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("index.html", { root: __dirname });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
