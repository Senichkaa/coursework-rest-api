const mongoose = require("mongoose");
const app = require("./app");

const DB = process.env.DB_HOST;

mongoose
  .connect(DB)
  .then(() => {
    app.listen(3000, () => {
      console.log("Server running. Use our API on port: 3000");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
