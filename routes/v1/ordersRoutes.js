import express from "express";
const router = express.Router();

import {
  cancelOrder,
  createOrder,
  getAllOrders,
  getOrderByUser,
  updateOrderStatus,
} from "../../controllers/v1/ordersController.js";
import { protect } from "../../middlewares/authMiddleware.js";

router.route("/").post(protect, createOrder).get(getAllOrders);
router.route("/updateOrderStatus/:id").put(updateOrderStatus);
router.route("/:id").get(getOrderByUser).delete(cancelOrder)

export default router;
