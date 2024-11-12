import express from "express";
import http from "node:http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();

// Use CORS middleware
app.use(cors({
  origin: "http://localhost:3000", // Allow requests from this origin
  methods: ["GET", "POST"], // Allow these HTTP methods
  allowedHeaders: ["Content-Type"], // Allow these headers
}));

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // Allow requests from this origin
    methods: ["GET", "POST"], // Allow these HTTP methods
  },
});

let scores = { team1: 0, team2: 0 };

io.on("connection", (socket) => {
  console.log("New client connected");

  // Emit the current scores to the newly connected client
  socket.emit("scoresUpdated", scores);

  socket.on("updateScores", (newScores) => {
    scores = newScores;
    io.emit("scoresUpdated", scores); // Emit the updated scores to all connected clients
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));