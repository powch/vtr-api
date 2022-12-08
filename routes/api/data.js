const router = require("express").Router();
const dataController = require("../../controller/dataController");

router
  .route("/:id")
  .get(dataController.getInitialPayload)
  .put(dataController.updateUserArrays);

module.exports = router;
