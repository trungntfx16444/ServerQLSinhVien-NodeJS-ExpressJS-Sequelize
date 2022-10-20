const express = require("express");
sinhVienRouter = express.Router();
const {
  layDSSinhVien,
  themSinhVien,
  capNhatSinhVien,
  xoaSinhVien,
  timSinhVienTheoTen,
} = require("../controllers/sinhVien.controller");
// lay ds Sinh Vien
sinhVienRouter.get("/", layDSSinhVien);

// tim sinh vient heo ten
sinhVienRouter.get("/:ten", timSinhVienTheoTen);

// them Sinh Vien
sinhVienRouter.post("/", themSinhVien);

// cap  Cap Nhat Sinh Vien
sinhVienRouter.put("/:id", capNhatSinhVien);

// xoa Sinh Vien
sinhVienRouter.delete("/:id", xoaSinhVien);

module.exports = sinhVienRouter;
