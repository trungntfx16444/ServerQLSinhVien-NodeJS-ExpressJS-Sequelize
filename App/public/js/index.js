// kiem tra du lieu form
const checkValid = () => {
  let valid = true;
  valid =
    kiemTraRong("ten", "Tên không được bỏ trống!") &
    kiemTraRong("email", "Email không được bỏ trống!") &
    kiemTraRong("toan", "Điểm Toán không được để trống!") &
    kiemTraRong("ly", "Điểm Lý không được để trống!") &
    kiemTraRong("hoa", "Điểm Hóa không được để trống!");
  valid &= kiemTraTatCaLaChu("ten", "Tên sinh viên chỉ được là chữ");
  valid &= kiemTraEmail("email", "Định dạng email không đúng");
  valid &= kiemTraTatCaLaSo("sdt", "Số điện thoại chỉ được là số");
  valid &=
    kiemTraDiem("toan", "Điểm Toán không hợp lệ") &
    kiemTraDiem("ly", "Điểm Lý không hợp lệ") &
    kiemTraDiem("hoa", "Điểm Hóa không hợp lệ");
  return valid;
};

// cap nhat lai trang
const capNhatLaiTrang = () => {
  const tbody = getEle("table__body");
  tbody.innerHTML = "";
  fetchSinhVien();
};

// them sinh vien
const themSinhVien = async () => {
  //let valid = checkValid();
  const name = getEle("ten").value;
  const email = getEle("email").value;
  const sdt = getEle("sdt").value;
  const toan = getEle("toan").value;
  const ly = getEle("ly").value;
  const hoa = getEle("hoa").value;

  const sinhVien = new SinhVien(name, email, sdt, toan, ly, hoa);
  const sinhVienThem = await themSV(sinhVien);
  if (sinhVienThem) {
    capNhatLaiTrang();
    alert("Thêm sinh viên thành công");
  } else {
    alert("Thêm sinh viên thất bại.");
  }
};

let listSinhVien = [];
// lay ds sinh vien va render len giao dien
const fetchSinhVien = async () => {
  const listSinhVien = await getListSinhVien();
  renderListSinhVien(listSinhVien, "table__body");
};

// lay ds sinh vien theo ten va render len giao dien
const laySinhVienTheoTen = async () => {
  const ten = getEle("txtSearch").value;

  let listSinhVien = await layDSSVtheoTen(ten);
  if (listSinhVien.length !== 0) {
    const tbody = getEle("table__body");
    tbody.innerHTML = "";
    renderListSinhVien(listSinhVien, "table__body");
  } else {
    alert(`Không tìm thấy tên ${ten}`);
  }
};

// render giao dien
fetchSinhVien();

// xoa sinh vien
const xoaSinhVien = async (id) => {
  await xoaSVtheoID(id);
  capNhatLaiTrang();
};
