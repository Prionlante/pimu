const express = require("express");
const router = express.Router();
const historyController = require("../controllers/history/history.controller");

let routes = (app) => {
  router.get("/get", historyController.get);
  router.post("/clear", historyController.clear)
  app.use("/api/history", router);
};

module.exports = routes;