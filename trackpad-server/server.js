// server.js
const { Server } = require("socket.io");
const robot = require("robotjs");

const io = new Server(3000, {
    cors: {
        origin: "*",
    },
});

console.log("🖥️ Server running on port 3000");

io.on("connection", (socket) => {
    console.log("📱 Phone connected");

    socket.on("move", ({ dx, dy }) => {
        const mouse = robot.getMousePos();
        robot.moveMouse(mouse.x + dx, mouse.y + dy);
    });

    socket.on("tap", () => {
        robot.mouseClick();
    });
});
