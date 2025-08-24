// EXPRESS SERVER SETUP

// 1. Load external sensetive info and read .env file using
require("dotenv").config();

// 2. Imports app.js which will be the express app object
const app = require("./src/app");

// 3. Choose port number from environment else default to 4000
const PORT = process.env.PORT || 4000;

// 4. Start the server and listen for incoming HTTP req
app.listen(PORT, () => {
  // 4.1 2nd argument, callback func => (will run when server starts)
  console.log(`API running at http://local:${PORT}`);
});
