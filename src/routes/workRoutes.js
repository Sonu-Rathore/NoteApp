const express = require("express");
const { newCases } = require("../controller/workController");
const workRouter = express.Router();

workRouter.get("/cases", newCases)

module.exports = workRouter;