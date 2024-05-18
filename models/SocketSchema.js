import mongoose from "mongoose";

const SocketSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    socketId: {
        type: String,
        required: true,
    },
    connectedAt: {
        type: Date,
        default: Date.now,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
});


const Sockets = mongoose.model("Sockets", SocketSchema);
export default Sockets;

/*
example of what a document might look like:
{
    "userId": "60d5ecb8b392d78866f8cd08",
    "socketId": "Hk47xIv_I9zx9i1AAABV",
    "connectedAt": "2022-03-01T14:48:00.000Z",
    "isActive": true
}
*/