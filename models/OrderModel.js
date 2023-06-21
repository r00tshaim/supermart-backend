import mongoose from "mongoose";

const OrderSchema = mongoose.Schema({
  orderItems: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: [true, "Please add items"],
    },
  ],
  status: {
    type: String,
    enum: [
      "cancelled",
      "rejected",
      "placed",
      "confirmed",
      "dispatched",
      "delivered",
    ],
    required: true,
    default: "placed",
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
