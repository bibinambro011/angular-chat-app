const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8000 });

// Store a set of connected WebSocket clients
const clients = new Set();

wss.on('connection', (ws) => {
  console.log('Client connected');

  // Add the new client to the set
  clients.add(ws);

  // Handle incoming messages from the client
  ws.on("message", function message(data, isBinary) {
    const message = isBinary ? data : data.toString();
    // Continue as before.
    console.log(message + "\n\n");
    broadcast(message);
  });
});

// Function to broadcast a message to all connected clients
function broadcast(message) {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  });
}

console.log('WebSocket server listening on port 8000');
