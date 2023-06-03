import express from "express";
const router = express.Router();

import { register } from "../../controllers/v1/userController.js";


router.route("/register").post(register);

export default router;
