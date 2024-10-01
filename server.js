require('dotenv').config(); // Load environment variables from .env file

const http = require('http');
const app = require('./app');

// Use the port from the .env file, or default to 3307
const port = process.env.PORT || 8080;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
