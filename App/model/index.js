const { Sequelize, DataTypes } = require("sequelize");
const { HOST, USER, PASSWORD, DB, dialect } = require("../config/db.config");
const { taoModalSinhVien } = require("./sinhvien.model");

// tao ket noi
const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect: dialect,
});

const SinhVien = taoModalSinhVien(sequelize);

module.exports = {
  sequelize,
  SinhVien,
};
