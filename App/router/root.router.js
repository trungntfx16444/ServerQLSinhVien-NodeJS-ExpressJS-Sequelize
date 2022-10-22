const express = require("express");
const router = express.Router();
const sinhVienRouter = require("../router/sinhvien.router");

router.use(express.json());
router.use("/", sinhVienRouter);

module.exports = router;
