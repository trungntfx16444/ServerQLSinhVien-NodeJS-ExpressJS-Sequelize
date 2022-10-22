const getEle = (id) => {
  return document.getElementById(id);
};

const kiemTraRong = (id, text) => {
  const value = getEle(id);
  if (value.value.trim() === "") {
    alert(text);
    return false;
  }
  return true;
};

const kiemTraTatCaLaChu = (id, text) => {
  const value = getEle(id).value;
  const regexChu = /^[A-Za-z ]+$/;
  if (!regexChu.test(value)) {
    alert(text);
    return false;
  }
  return true;
};

const kiemTraEmail = (id, text) => {
  const value = getEle(id).value;
  const regexEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regexEmail.test(value)) {
    alert(text);
    return false;
  }
  return true;
};

const kiemTraTatCaLaSo = (id, text) => {
  const value = getEle(id).value;
  const regexSo = /^[0-9]+$/;
  if (!regexSo.test(value)) {
    alert(text);
    return false;
  }
  return true;
};

const kiemTraDiem = (id, text) => {
  const value = parseInt(getEle(id).value);
  const regexDiem = /^\d{0,1}\.|(\d{0,4})$/;
  if (!regexDiem.test(value)) {
    alert(text);
    return false;
  }
  if (value < 0 || value > 10) {
    alert(text);
    return false;
  }
  return true;
};
