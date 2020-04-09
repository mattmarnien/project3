const router = require("express").Router();
const gameCardController = require("../../controllers/gameCardController");

// Matches with "/api/gameCards"
router.route("/")
  .get(gameCardController.findAll)
  .post(booksController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
