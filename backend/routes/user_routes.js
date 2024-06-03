const express = require("express");
const {test} = require("../controllers/user_controller")
const router = express.Router();

router.get("/test", test);

module.exports = router;