import { createRequire } from "module";
const require = createRequire(import.meta.url);
import express from "express";
const router = express.Router();
// TESTING ENDPOINT
router.get("/test", (req, res) =>
  res.render('test')
);

router.use("/",require("./homepage.routes/homepage"));
router.use("/messages", require("./messages.routes"));

module.exports = router;
