const router = require("express").Router();
const { userLogin } = require("../controllers/auth.controller");

router.post("/login", userLogin);

module.exports = router;
