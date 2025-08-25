// EXPRESS SERVER SETUP

// 1. Use dotenv library to load external sensetive info and read from .env
require("dotenv").config();

// 2. Imports app.js which will be the express app object
const app = require("./app");

// 3. Choose port number from environment else default to 4000
const PORT = process.env.PORT || 4000;

// 4. Start the server and listen for incoming HTTP req
// 2nd argument, callback func => (will run when server starts)
app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});
