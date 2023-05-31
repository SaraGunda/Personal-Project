const express = require("express");
const router = express.Router();
const siteRouter = require("./site-routes");
const quizRouter = require("./quiz-routes");
const adminRouter = require("./admin-routes");

router.use("/", siteRouter);
router.use("/quiz", quizRouter);
router.use("/admin-console", adminRouter);


module.exports = router;
