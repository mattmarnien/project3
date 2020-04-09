const router = require("express").Router();
const gameCardRoutes = require("./gameCards");

// gameCard routes
router.use("/gameCards", gameCardRoutes);

module.exports = router;
