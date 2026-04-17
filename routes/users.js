const router = require("express").Router();
const controller = require("../controllers/userController");
const isAuthenticated = require("../middleware/auth");

// GET ALL
router.get("/", controller.getAll);

// GET ONE
router.get("/:id", controller.getOne);

router.post("/", isAuthenticated, controller.create);
router.put("/:id", isAuthenticated, controller.update);
router.delete("/:id", isAuthenticated, controller.delete);

module.exports = router;