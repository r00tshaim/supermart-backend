import http from "http";
import { Server } from "socket.io";
import { getSocketId, isUserActive, 
        updateSocketId, updateConnectionStatus, 
        updateConnectionTime, addNewConnectionEntry,
        handleReconnection , handleConnection
      } from './socketHelper.js'; // Path to your socketHelper.js file

import logger from "../logger/logger.js";


export default function initSocket(app) {
  // Create server with http and express app
  const server = http.createServer(app);

  // Initialize Socket.IO
  const io = new Server(server, {
    cors: {
      origin: '*'
    },
  });

  // Handle connection event
  io.on("connection", (socket) => {
    logger.info(`New client connected. Socket ID: ${socket.id}`);
    console.log("New client connected");
    const userId = socket.handshake.query.userId;
    if(userId) {
      console.log("userId=", userId);
      handleConnection(userId, socket.id);
    }
    

    // Handle disconnection event
    socket.on("disconnect", () => {
        logger.info(`Client disconnected. Socket ID: ${socket.id}`);
        console.log("Client disconnected");
        updateConnectionStatus(userId, false);
    });
  });

  return { server, io };
}