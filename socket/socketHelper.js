import mongoose from 'mongoose';
import Sockets from '../models/SocketSchema.js'; // Path to your SocketSchema.js file

// Function to get socket id of a user
export async function getSocketId(userId) {
try {
    const socket = await Sockets.findOne({ userId: userId, isActive: true });
    return socket ? socket.socketId : null;
}catch(error) {
    console.log("Error getSocketId():", error);
}
  
}

// Function to check if a user is active
export async function isUserActive(userId) {
try{
  const socket = await Sockets.findOne({ userId: userId, isActive: true });
  return !!socket;
}catch(error) {
    console.log("Error isUserActive():", error);
}
}

// Function to update the socket id of a user
export async function updateSocketId(userId, newSocketId) {
    console.log("updateSocketId() called. userId=", userId, "newSocketId=", newSocketId);
try {
    const socket = await Sockets.findOne({ userId: userId, isActive: true });
    if (socket) {
      socket.socketId = newSocketId;
      await socket.save();
    }
}catch(error) {
    console.log("Error updateSocketId():", error);  
}
 
}

// Function to update the connection status of a user
export async function updateConnectionStatus(userId, isActive) {
    console.log("updateConnectionStatus() called. userId=", userId, "isActive=", isActive); 
try {
    console.log("updateConnectionStatus() called. userId=", userId, "isActive=", isActive);
    //const _id = new mongoose.Types.ObjectId(userId);
    const socket = await Sockets.findOne({ userId: userId });
    if (socket) {
      socket.isActive = isActive;
      await socket.save();
    }
}catch(error) {
    console.log("Error updateConnectionStatus():", error);
}
    
}

// Function to update the connection time of a user
export async function updateConnectionTime(userId, newTime) {
    console.log("updateConnectionTime() called. userId=", userId, "newTime=", newTime);
    try {
        const socket = await Sockets.findOne({ userId: userId, isActive: true });
        if (socket) {
          socket.connectedAt = newTime;
          await socket.save();
        }
    }catch(error){
        console.log("Error updateConnectionTime():", error);
    }
  
}

// Function to add a new socket entry
export async function addNewConnectionEntry(userId, socketId) {
    console.log("addNewConnectionEntry() called. userId=", userId, "socketId=", socketId);
    //const _id = new mongoose.Types.ObjectId(userId);
    try {
        const socket = new Sockets({
            userId: userId,
            socketId: socketId,
            connectedAt: new Date(),
            isActive: true
          });
          await socket.save();
    }catch(error){
        console.log("Error addNewConnectionEntry():", error);
    }
    
  }
  
  // Function to handle re-connection of a client
  export async function handleReconnection(userId, socketId) {
    console.log("handleReconnection() called. userId=", userId, "socketId=", socketId);
    try {
 // Check if the user is already active
 const isActive = await isUserActive(userId);
 if (isActive) {
   // If the user is already active, update the socket id
   await updateSocketId(userId, socketId);
 } else {
   // If the user is not active, update the connection status and the socket id
   await updateConnectionStatus(userId, true);
   await updateSocketId(userId, socketId);
 }
    }catch(error){
        console.log("Error handleReconnection():", error);
    }
   
  }


  export async function handleConnection(userId, socketId) {
    console.log("handleConnection() called. userId=", userId, "socketId=", socketId);
    try {
        const existingSocketId = await getSocketId(userId);
  
        if (existingSocketId) {
        console.log("existingSocketId=", existingSocketId);
          // If the user was previously connected, update the socket id and connection status
          await updateSocketId(userId, socketId);
          await updateConnectionStatus(userId, true);
        } else {
            console.log("new connection entry");
          // If the user was not previously connected, add a new socket entry
          await addNewConnectionEntry(userId, socketId);
        }
    }catch(error) {
        console.log("Error handleConnection():", error);
    }
    
  }