const router = require("express").Router();
const gameCardRoutes = require("./gameCards");
const userRoutes = require("./Users");

// gameCard routes
router.use("/gameCards", gameCardRoutes);

// User routes

router.route("/users")
.get(UserController.findUsers)
.post(UserController.addUser)

router.route("/user")

router.use("/users", userRoutes)


module.exports = router;
