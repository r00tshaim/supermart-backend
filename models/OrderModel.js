import mongoose from "mongoose";

const OrderSchema = mongoose.Schema({
  orderItems: [
    {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: [true, "Please add items"],
        },
        qty: {
          type: Number,
          required: true,
          default: 1,
        }
    },
  ],
  status: {
    type: String,
    enum: [
      "CANCELLED",
      "REJECTED",
      "PLACED",
      "CONFIRMED",
      "DISPATCHED",
      "DELIVERED",
    ],
    required: true,
    default: "PLACED",
  },
  placedAt: {
    type: Date,
    default: Date.now,
  },
  lastUpdatedAt: {
    type: Date,
    default: Date.now,
  },
  orderTotal: {
    type: Number,
    required: true,
  },
  deliveryAddress: {
    //TODO: use deliveryAddress Schema
    //type: mongoose.Schema.Types.ObjectId,
    //ref: "deliveryAddress",
    //required: true,
    type: String,
    required: true
  },
  paymentMethod: {
    type: String,
    required: true,
  },
});

const Order = mongoose.model("Order", OrderSchema);
export default Order;
