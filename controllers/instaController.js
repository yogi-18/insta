const instaMode = require("../models/instaModel");
const asyncHandler = require("express-async-handler");

exports.instaRegister = asyncHandler(async (req, res) => {
  console.log(req.body);
  const result = await instaMode.create(req.body);
  res.json({
    message: "user register successfully",
  });
});
