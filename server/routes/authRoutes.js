const express = require("express");
const { register, login, auth } = require("../controllers/authController");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get('/auth', auth);

module.exports = router;
