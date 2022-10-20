const { SinhVien } = require("../model/index");

//them sinh vien
const them = async (sinhVien) => {
  const sinhVienMoi = await SinhVien.create(sinhVien);
  return sinhVienMoi;
};

// lay toan bo danh sach sinh vien
const layDS = async () => {
  const ds = await SinhVien.findAll({
    order: [["id", "DESC"]],
  });
  if (ds) {
    return ds;
  } else {
    return false;
  }
};

// tim mot sinh vien theo id
const lay = async (id) => {
  const sinhVien = await SinhVien.findOne({
    where: {
      id: id,
    },
  });
  if (sinhVien) {
    return sinhVien;
  } else {
    return false;
  }
};

// tim mot sinh vien theo ten
const layByName = async (_name) => {
  const sinhVien = await SinhVien.findAll({
    where: {
      name: _name,
    },
  });
  if (sinhVien) {
    return sinhVien;
  } else {
    return false;
  }
};

// cap nhat sinh vien
const capNhat = async (id, name, email, toan, ly, hoa) => {
  const sinhVienCapNhat = await lay(id);
  if (sinhVienCapNhat) {
    sinhVienCapNhat.name = name;
    sinhVienCapNhat.email = email;
    sinhVienCapNhat.toan = toan;
    sinhVienCapNhat.ly = ly;
    sinhVienCapNhat.hoa = hoa;
    const updated = await sinhVienCapNhat.save();
    return updated;
  } else {
    return false;
  }
};

// xoa sinh vien
const xoa = async (id) => {
  const sinhVienXoa = await lay(id);
  if (sinhVienXoa) {
    await SinhVien.destroy({
      where: {
        id: id,
      },
    });
    return sinhVienXoa;
  } else {
    return false;
  }
};

module.exports = {
  them,
  lay,
  layDS,
  capNhat,
  xoa,
  layByName,
};
