const { instaRegister } = require("../controllers/instaController");

const router = require("express").Router();

router.post("/user", instaRegister);

module.exports = router;
