// ============================================
// Task 1: Node.js HTTP Server
// File: server.js
// Description: A simple HTTP server using
//   Node.js built-in 'http' module.
// ============================================

// Step 1: Import the built-in HTTP module
const http = require('http');

// Step 2: Define the port number
const PORT = 3000;

// Step 3: Create the HTTP server using http.createServer()
// The callback function receives two objects:
//   req - the incoming request from the browser
//   res - the response we send back to the browser
const server = http.createServer((req, res) => {
  // Set the response HTTP header with status 200 (OK)
  // and content type as plain text
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the text "Hello" to the browser and end the response
  res.end('Hello');
});

// Step 4: Start the server and listen on port 3000
// The callback runs once the server is successfully started
server.listen(PORT, () => {
  console.log(`Node.js HTTP Server is running at http://localhost:${PORT}`);
});

