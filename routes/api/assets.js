const router = require("express").Router();
const assetController = require("../../controller/assetController");

router.route("/:page").get(assetController.findAll);

router
  .route("/:id")
  .post(assetController.create)
  .delete(assetController.delete);

module.exports = router;
