// ============================================
// Task 2, 3, 4: Express Server with Routes
// File: app.js
// Description: An Express server with GET
//   routes and 404 error handling.
// ============================================

// Step 1: Import Express using require
const express = require('express');

// Step 2: Create the Express application
const app = express();

// Step 3: Define the port number
const PORT = 3000;

// ============================================
// Task 3: GET Routes
// ============================================

// Route 1: GET /
// Returns a welcome message
app.get('/', (req, res) => {
  res.send('Welcome to Node.js and Express Server');
});

// Route 2: GET /about
// Returns JSON data with student information
app.get('/about', (req, res) => {
  res.json({
    name: 'Sai Ram',
    section: 'CSE(GEN)-AI-2B'
  });
});

// Route 3: GET /time
// Returns the current date and time
app.get('/time', (req, res) => {
  // Create a new Date object to get the current date and time
  const currentTime = new Date();
  res.send(currentTime.toString());
});

// ============================================
// Task 4: 404 Error Handling
// ============================================

// This middleware handles all unknown routes
// It MUST come after all valid routes
app.use((req, res) => {
  // Set status code to 404 and send error message
  res.status(404).send('404 - Page Not Found');
});

// Step 4: Start the Express server using app.listen()
app.listen(PORT, () => {
  console.log(`Express Server is running at http://localhost:${PORT}`);
});

