const express = require("express");
const router = express.Router();
const excelController = require("../controllers/kids/excel.controller");
const upload = require("../middlewares/upload");

let routes = (app) => {
  router.post("/upload", upload.single("file"), excelController.upload);
  router.get("/kids", excelController.getKids);

  router.get("/download", excelController.download);

  router.get("/norms", excelController.normative);

  router.post("/single", excelController.single);
  
  app.use("/api/excel", router);
};

module.exports = routes;
