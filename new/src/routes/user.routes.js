const express = require("express");
const router = express.Router();
const userController = require("../controllers/user/user.controller");

let routes = (app) => {
  router.post("/register", userController.register);
  router.post("/login", userController.login);

  app.use("/api/user", router);
};

module.exports = routes;