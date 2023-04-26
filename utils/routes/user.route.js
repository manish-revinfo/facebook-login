const router = require("express").Router();

const {
  createUser,
  deleteUser,
  updateUser,
  fetchAllUser,
  fetchOneUser,
} = require("../controllers/user.controller");

router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/:id", fetchOneUser);
router.get("/", fetchAllUser);

module.exports = router;
