const express = require("express");
const app = express();
const PORT = process.env.PORT || "3000";
const router = require("../App/router/root.router");
const { configRender } = require("../App/config/render.config");
app.use(router);
configRender(app);

app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// connect db

const { sequelize } = require("./model/index");
sequelize.sync({ alter: true });
