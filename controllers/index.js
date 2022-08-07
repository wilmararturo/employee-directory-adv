const router = require("express").Router();
const authRoutes = require("./auth");

const htmlRoutes = require("./htmlRoutes");
const apiRoutes = require("./api");

router.use("/login", authRoutes);
router.use("/", htmlRoutes);
router.use("/api", apiRoutes);

module.exports = router;
