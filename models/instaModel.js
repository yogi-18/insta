const mongoose = require("mongoose");

const instaSchema = mongoose.Schema(
  {
    mobile: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("insta", instaSchema);
