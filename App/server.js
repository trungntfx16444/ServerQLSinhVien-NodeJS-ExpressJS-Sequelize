const express = require("express");
const app = express();
const PORT = process.env.PORT || "3000";
const router = require("../App/router/root.router");

app.use(router);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// connect db

const { sequelize } = require("./model/index");
sequelize.sync({ alter: true });
