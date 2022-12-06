const router = require("express").Router();
const jwt = require("express-jwt");
const jwks = require("jwks-rsa");

const assetRoutes = require("./assets");
const userRoutes = require("./users");
// const gearRoutes = require("./gear");
const dataRoutes = require("./data");

const jwtCheck = jwt.expressjwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://dev-kg1qdows.us.auth0.com/.well-known/jwks.json",
  }),
  audience: "https://vtassets.com/api/",
  issuer: "https://dev-kg1qdows.us.auth0.com/",
  algorithms: ["RS256"],
});

router.use("/assets", assetRoutes);
router.use("/user", userRoutes);
// router.use("/gear", gearRoutes);
router.use("/data", dataRoutes);

module.exports = router;
