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
sinhVienRouter.get("/sinhvien", layDSSinhVien);

// tim sinh vient heo ten
sinhVienRouter.get("/sinhvien/:ten", timSinhVienTheoTen);

// them Sinh Vien
sinhVienRouter.post("/sinhvien", themSinhVien);

// cap  Cap Nhat Sinh Vien
sinhVienRouter.put("/sinhvien/:id", capNhatSinhVien);

// xoa Sinh Vien
sinhVienRouter.delete("/sinhvien/:id", xoaSinhVien);

module.exports = sinhVienRouter;
