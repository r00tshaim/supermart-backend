import mongoose from "mongoose";
const Schema = mongoose.Schema;

/*
const OfferSchema = new Schema({
  label: String,
  image: String,
});
*/

const ProductSchema = new Schema({
  name: { type: String, require: true },

  description: { type: String, require: true },

  image: { type: String, require: true },

  mrpPrice: { type: Number, require: true },

  offerPrice: {type: Number, default: -1},

  //offer: OfferSchema,

  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },

  subcategory: {
    type: Schema.Types.ObjectId,
    ref: "subCategory",
  },

  quantity: { type: Schema.Types.Mixed, require: true }, // can be a number or a string for custom quantities

  quantityUnit: { type: String, require: true }, // unit of measurement for the quantity (e.g. "kg", "L", "g", etc.)
});

const Product = mongoose.model("Product", ProductSchema);

export default Product;
