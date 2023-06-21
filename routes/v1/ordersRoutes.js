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

//TODO: revisit .post(createOrder) logic and add protect to it once authencitcation feature is completed
router.route("/").post(createOrder).get(getAllOrders);
router.route("/updateOrderStatus/:id").put(updateOrderStatus);
router.route("/:id").get(getOrderByUser).delete(cancelOrder)

export default router;
