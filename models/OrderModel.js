import mongoose from "mongoose";

const OrderSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
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
          min: [1, 'Order qty cannot be less then 1.'],
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
