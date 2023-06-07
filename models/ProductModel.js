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
});

const Product = mongoose.model("Product", ProductSchema);

export default Product;
