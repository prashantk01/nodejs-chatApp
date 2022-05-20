import express from "express";
const router = express.Router();

router.use("/", require("./message"));

module.exports = router;
