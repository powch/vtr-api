const router = require("express").Router();
const dataController = require("../../controller/dataController");

router.route("/:id").get(dataController.getInitialPayload);

module.exports = router;
