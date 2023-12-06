const express = require("express");
const { addExecutive, generateOtp, verifyOtp } = require("../controller/userController");

const userRouter = express.Router();

userRouter.post("/add-executive", addExecutive);
userRouter.post("/generate-otp", generateOtp);
userRouter.post("/verify-otp", verifyOtp);

module.exports = userRouter;