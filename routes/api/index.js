const router = require("express").Router();

const assetRoutes = require("./assets");
const userRoutes = require("./users");
// const gearRoutes = require("./gear");
const dataRoutes = require("./data");

router.use("/assets", assetRoutes);
router.use("/user", userRoutes);
// router.use("/gear", gearRoutes);
router.use("/data", dataRoutes);

module.exports = router;
