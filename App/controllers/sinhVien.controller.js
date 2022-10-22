const {
  lay,
  layByName,
  layDS,
  capNhat,
  xoa,
  them,
} = require("../services/sinhvien.services");

// them sinh vien
const themSinhVien = async (req, res) => {
  const sinhvien = req.body;
  console.log(sinhvien);
  if (sinhvien) {
    const sinhVienMoi = await them(sinhvien);
    res.status(201).send(sinhVienMoi);
  } else {
    res.status(404).send("Thêm sinh viên không thành công");
  }
};

// lay ds sinh vien
const layDSSinhVien = async (req, res) => {
  const dsSinhVien = await layDS();
  if (dsSinhVien) {
    res.status(200).send(dsSinhVien);
  } else {
    res.status(404).send("Không tìm thấy danh sách");
  }
};

// tim sinh vien theo ten
const timSinhVienTheoTen = async (req, res) => {
  const { ten } = req.params;
  const dsSinhVien = await layByName(ten);
  if (dsSinhVien.length !== 0) {
    res.status(200).send(dsSinhVien);
  } else {
    res.status(404).send("Sinh Viên Không tồn tại");
  }
};

// cap nhat sinh vien
const capNhatSinhVien = async (req, res) => {
  const { id } = req.params;
  const { name, email, sdt, toan, ly, hoa } = req.body;
  const sinhVien = await lay(id);
  if (sinhVien) {
    const sinhVienCapNhat = await capNhat(id, name, email, sdt, toan, ly, hoa);
    res.status(200).send(sinhVienCapNhat);
  } else {
    res.status(404).send("Không tìm thấy Sinh Viên");
  }
};

// xoa sinh vien
const xoaSinhVien = async (req, res) => {
  const { id } = req.params;
  const sinhVien = await lay(id);
  if (sinhVien) {
    const sinhVienXoa = await xoa(id);
    res.status(200).send(sinhVienXoa);
  } else {
    res.status(404).send("Không tìm thấy Sinh Viên");
  }
};

module.exports = {
  themSinhVien,
  layDSSinhVien,
  capNhatSinhVien,
  xoaSinhVien,
  timSinhVienTheoTen,
};
