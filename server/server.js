import express from "express";
import cors from "cors";
import http from "http";
import "dotenv/config";
import { connectDB } from "./library/db.js";
import userRouter from "./routes/userRoutes.js";
import { Server } from "socket.io";
import messageRouter from "./routes/messageRoutes.js";
// create express app and http server
const app = express();
const server = http.createServer(app);

//initialize socket.io
export const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

//store online users
export const userSocketMap = {}; //userId:socketId

//socket.io connection handler
io.on("connection", (socket) => {
  const userId = socket.handshake.query.userId;
  console.log(`User connected: ${userId}`);

  if (userId) {
    userSocketMap[userId] = socket.id;
  }

  //emit online users to all connected clients
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    console.log(`User disconnected: ${userId}`);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

app.use(express.json({ limit: "4mb" }));
app.use(cors());

// Routes
app.use("/api/status", (req, res) => res.send("Server is live"));
app.use("/api/auth", userRouter);
app.use("/api/messages", messageRouter);

// connect to DB
await connectDB();

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
