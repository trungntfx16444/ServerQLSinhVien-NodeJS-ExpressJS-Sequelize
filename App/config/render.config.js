const express = require("express");

const configRender = (app) => {
  app.set("view engine", "ejs");
  app.set("views", "./App/views");
};

module.exports = { configRender };
