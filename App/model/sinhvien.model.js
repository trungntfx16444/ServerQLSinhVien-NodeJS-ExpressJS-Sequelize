const { DataTypes } = require("sequelize");
const taoModalSinhVien = (sequelize) => {
  return sequelize.define(
    "SinhVien",
    {
      name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      sdt: {
        type: DataTypes.STRING,
      },
      toan: {
        type: DataTypes.DOUBLE,
      },
      ly: {
        type: DataTypes.DOUBLE,
      },
      hoa: {
        type: DataTypes.DOUBLE,
      },
    },
    {
      tableName: "SinhVien",
    }
  );
};

module.exports = {
  taoModalSinhVien,
};
