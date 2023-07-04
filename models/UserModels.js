import mongoose from "mongoose";

const UserSchema = mongoose.Schema({

    name: {
      type: String,
      required: [true, "Please provide name of user"],
    },
    email: {
      type: String,
      required: [true, "Please provide email address"],
      unique: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please provide a valid email",
      ],
    },
    mobile : {
        type : Number,
        required: [true, "Please provide mobile number"],
    },
    address : {
        type : String,
    },
    role : {
        type : String,
        default: "user",
    },

    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  {
    timestamps: true,
  }
)

const User  = mongoose.model("User" , UserSchema);
export default User;