class SinhVien {
  constructor(name, email, sdt, toan, ly, hoa) {
    this.name = name;
    this.email = email;
    this.sdt = sdt;
    this.toan = toan;
    this.ly = ly;
    this.hoa = hoa;
  }
}

// render sinh vien
const renderListSinhVien = (listSinhVien, idTable) => {
  const tbody = getEle(idTable);
  for (let sinhVien of listSinhVien) {
    const trbody = document.createElement("tr");
    trbody.innerHTML = `
      <tr class="border border-1, text-center">
         <td class="border border-1 p-2 text-center">${sinhVien.id}</td>
         <td class="border border-1 p-2 text-center">${sinhVien.name}</td>
         <td class="border border-1 p-2 text-center">${sinhVien.email}</td>
         <td class="border border-1 p-2 text-center">${sinhVien.sdt}</td>
         <td class="border border-1 p-2 text-center">${sinhVien.toan}</td>
         <td class="border border-1 p-2 text-center">${sinhVien.ly}</td>
         <td class="border border-1 p-2 text-center">${sinhVien.hoa}</td>
         <td class="border border-1 p-2 text-center">
         <button class="btn btn-primary" data-toggle="modal" data-target="#exampleModal"><i class="fa fa-file-signature"></i></button>
         <button class="btn btn-danger" onclick="(xoaSinhVien(${sinhVien.id}))"><i class="fa fa-trash"></i></button>
         </td>
      </tr> 
    `;
    tbody.appendChild(trbody);
  }
};

// lay toan bo list sinh vien
const getListSinhVien = async () => {
  let listSinhVien = [];
  await axios({
    method: "GET",
    url: "https://serverqlsv1.herokuapp.com/sinhvien",
  })
    .then((res) => {
      listSinhVien = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
  return listSinhVien;
};

/*
// fetch lay ds sv
const getListSinhVien = async () => {
  let listSinhVien = await fetch(
    "http://serverqlsvnodejsexpress.herokuapp.com/sinhvien/"
  )
    .then((res) => res.json())
    .then((data) => data);
  console.log(listSinhVien);
  return listSinhVien;
};
*/
// lay sinh vien theo ten
const layDSSVtheoTen = async (ten) => {
  let listSinhVien = [];
  await axios({
    url: `https://serverqlsv1.herokuapp.com/sinhvien/${ten}`,
    method: "GET",
  })
    .then((res) => {
      console.log(res);
      listSinhVien = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
  return listSinhVien;
};

// xoa sinh vien
const xoaSVtheoID = async (id) => {
  const sinhVienXoa = await axios({
    url: `https://serverqlsv1.herokuapp.com/sinhvien/${id}`,
    method: "DELETE",
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
// them sinh vien
const themSV = async (sinhVien) => {
  const sinhvienthem = await axios
    .post("https://serverqlsv1.herokuapp.com/sinhvien", {
      name: sinhVien.name,
      email: sinhVien.email,
      sdt: sinhVien.sdt,
      toan: sinhVien.toan,
      ly: sinhVien.ly,
      hoa: sinhVien.hoa,
    })
    .then((res) => {
      console.log(res);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
};
/*
// them sinh vien fetch
async function themSV(url, data) {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });
  return response.json();
}
*/
