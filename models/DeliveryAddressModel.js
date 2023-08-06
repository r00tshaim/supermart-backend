import mongoose from "mongoose";

const _DeliveryAddressSchema = mongoose.Schema({
  //user ref
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Please provide User schema for this DeliveryAddress"],
  },

  defaultAddress: {
    type: Boolean,
    default: false,
  },

  //contact details
  contactName: {
    type: String,
    required: [true, "Contact name is required for DeliveryAddressSchema"],
  },
  contactMobileNo: {
    type: String,
    required: [
      true,
      "Contact mobile number is required for DeliveryAddressSchema",
    ],
  },

  //address details
  pincode: {
    type: String,
    required: [true, "Pincode is required for DeliveryAddressSchema"],
  },
  city: {
    type: String,
    //required: [true, "City is required for DeliveryAddressSchema"]
  },
  state: {
    type: String,
    //required: [true, "State is required for DeliveryAddressSchema"]
  },
  streetAddress: {
    type: String,
    required: [true, "Street Address is required for DeliveryAddressSchema"],
  },
  landmarkOrArea: {
    type: String,
    required: [true, "Landmark is required for DeliveryAddressSchema"],
  },
  flatOrHouseNo: String,
  towerNo: String,
  buildingApartmentName: String,
});

const DeliveryAddressSchema = mongoose.model(
  "DeliveryAddressSchema",
  _DeliveryAddressSchema
);
export default DeliveryAddressSchema;
