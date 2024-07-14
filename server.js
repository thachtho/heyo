const express = require('express');
const WebSocket = require('ws');

const app = express();
const port = 2000;

// Tạo HTTP server và lắng nghe trên port 2000
const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Tạo WebSocket server và gắn vào HTTP server
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('A new client connected!');

  // Gửi tin nhắn cho client khi kết nối thành công
  ws.send('Welcome to WebSocket server!');

  // Xử lý tin nhắn từ client
  ws.on('message', (message) => {
    console.log(`Received:`, JSON.parse(message));
    // Gửi lại tin nhắn cho tất cả các client
    
  });

  // Xử lý khi client ngắt kết nối
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

// Sử dụng Express để phục vụ các file tĩnh nếu cần thiết
app.use(express.static('public'));
