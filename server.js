const mongoose = require("mongoose");
const app = require("./app");
const { DB_HOST } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3333, () => {
      console.log("Server running. Use our API on port: 3333");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
