const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // cors is a middlware so use in app.use()
// when we use cors when we need to access data from fontend
mongoose.connect(
  "mongodb+srv://yogesh:QlHIsnptnfpC2tho@cluster0.v1datbo.mongodb.net/insta+?retryWrites=true&w=majority"
);
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", require("./routes/instaRoute"));
app.use(express.static("public"));
app.use("*", (req, res) => {
  res.json({
    message: "404 Resoureces Not Found ",
  });
});

const PORT = 5000;

mongoose.connection.once("open", () => {
  console.log("DataBase Connected");
  app.listen(PORT, console.log(`http://localhost:${PORT}`));
});

mongoose.connection.on("error", (err) => {
  console.log("Unable To Connect Database" + err);
});
