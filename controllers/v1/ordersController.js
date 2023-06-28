import ErrorHandler from "../../utils/errorHandler.js";
import Order from "../../models/OrderModel.js";

// @desc    Create New Order
// @route   POST /api/v1/orders
// @access  private
const createOrder = async (req, res, next) => {
  const {
    orderItems,
    status,
    placedAt,
    lastUpdatedAt,
    orderTotal,
    deliveryAddress,
    paymentMethod,
  } = req.body;

  orderItems.map((item) => console.log("item=", item));
  console.log(
    `orderTotal=${orderTotal} deliverAdd=${deliveryAddress} paymentMethod=${paymentMethod}`
  );

  if (!orderItems || !orderTotal || !deliveryAddress || !paymentMethod) {
    return next(new ErrorHandler(401, "Please provide all required filds"));
  }

  try {
    const order = new Order({
      orderItems,
      //user: req.user._id,           //TODO: we need to revisit this logic once authentication feature is completed
      //status,
      //placedAt,
      //lastUpdatedAt,
      orderTotal,
      deliveryAddress,
      paymentMethod,
    });

    const createdOrder = await order.save();
    //need to send product object, instead of product id
    const populatedOrder = await Order.findById(createdOrder._id)
      .populate("orderItems.productId")
      .exec();

    //console.log("createdOrder=", populatedOrder)
    res.status(200).json({
      success: true,
      order: populatedOrder,
    });
  } catch (error) {
    return next(new ErrorHandler(501, `Error : ${error.message}`));
  }
};

// @desc    Fetch all Orders
// @route   GET /api/v1/orders
// @access  Public
const getAllOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({});
    res.status(200).json({
      orders,
    });
  } catch (error) {
    return next(new ErrorHandler(501, `Error : ${error.message}`));
  }
};

// @desc    Fetch all Orders
// @route   PUT /api/v1/orders/updateOrderStatus/:id
// @access  Public
const updateOrderStatus = async (req, res, next) => {
  const { status } = req.body;

  if (!status) {
    return next(new ErrorHandler(401, "Please provide status fild"));
  }

  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return next(new ErrorHandler(404, "No order found!"));
    }
    if (order) {
      order.status = status;
      const updatedOrder = await order.save();
      res.status(200).json({
        success: true,
        updatedOrder,
      });
    }
  } catch (error) {
    return next(new ErrorHandler(501, `Error : ${error.message}`));
  }
};

// @desc    Get all orders by user ID
// @route   GET /api/v1/orders/:id
// @access  Private
const getOrderByUser = async (req, res, next) => {
  res.send("Working 🚀");
};

// @desc     Cancel order
// @route   DELETE /api/v1/orders/:id
// @access  Private
const cancelOrder = async (req, res, next) => {
  const orderId = req.params.id;
  try {
    const order = await Order.findOneAndDelete({ _id: orderId });
    if (!order) {
      return next(new ErrorHandler(404, "Order not found!"));
    }

    if (order) {
      res.status(200).json({
        success: true,
        order,
      });
    }
  } catch (error) {
    return next(new ErrorHandler(501, `Error : ${error.message}`));
  }
};

export {
  getAllOrders,
  createOrder,
  updateOrderStatus,
  getOrderByUser,
  cancelOrder,
};
