# Track-Pad-Mobile-App
📱 Wireless Phone Trackpad Turn your smartphone into a wireless trackpad to control your laptop’s mouse — using your own custom-built app! This project uses React Native with Expo for the mobile app and Node.js + Socket.io + RobotJS for the desktop server, enabling smooth, real-time cursor movement and tap-to-click functionality.
📱 Wireless Phone Trackpad
Turn your smartphone into a wireless trackpad to control your laptop’s mouse — using your own custom-built app! This project uses React Native with Expo for the mobile app and Node.js + Socket.io + RobotJS for the desktop server, enabling smooth, real-time cursor movement and tap-to-click functionality.

🚀 Features
Use your phone screen as a touchpad

Tap to click on your laptop

Real-time mouse control via WebSockets

Works over Wi-Fi – no USB or Bluetooth needed

Supports Android & iPhone (via Expo Go)

🧰 Tech Stack
Mobile: React Native + Expo

Desktop Server: Node.js, Socket.io, RobotJS

📦 Setup Instructions
1. Install Requirements
Node.js (https://nodejs.org)

Expo CLI: npm install -g expo-cli

Expo Go app on your phone

2. Set Up Laptop Server
bash
Copy
Edit
mkdir trackpad-server && cd trackpad-server
npm init -y
npm install socket.io robotjs
Create server.js to receive and act on touch input.

3. Build Mobile App
bash
Copy
Edit
expo init trackpad-app
cd trackpad-app
npm install socket.io-client
Replace App.js with trackpad UI code. Use your laptop's local IP address.

4. Run
Start server: node server.js

Start mobile app: expo start

Scan QR with Expo Go on your phone

⭐ Future Upgrades: Right-click, scroll, drag, sensitivity adjustment, and USB/Bluetooth modes.

Enjoy turning your phone into a smart, wireless trackpad!


