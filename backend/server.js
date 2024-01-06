const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});
const conn = require("./db/config");

const dotenv = require("dotenv");
dotenv.config();
conn();

const PORT = process.env.BASE_URL || 9000;
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");

const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");
const { UserMessage } = require("./models/Message");

app.use(
  fileUpload({
    useTempFiles: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/posts", postRoutes);

server.listen(PORT, (err) => {
  if (!err) console.log(`{Server is running at ${PORT}}`);
});

io.on("connection", async (socket) => {
  socket.on("room", (data) => {
    socket.join(data.room);
  });


  socket.on("sender", async (data) => {
    // const send = new UserMessage({
    //   message: data.typedMessage,
    //   senderId: data.senderId,
    // });
    // await send.save();

    // const senderData = await UserMessage.find({ senderId: data.senderId });
    socket.emit('message',data)
    socket.to(data.room).emit("receiver", data);
  });

  socket.on("disconnect", () => {
    console.log(`disconnected`);
  });
});
