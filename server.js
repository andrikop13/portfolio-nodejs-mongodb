const mongoose = require("mongoose");
const dotenv = require("dotenv");
const {
  listenToUnCaughtExceptions,
  listenToUnhadledErrors,
} = require("./utils/unhandledErrors");

dotenv.config({ path: "./.env.development.local" });

listenToUnCaughtExceptions();

const app = require("./app");

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("DB was succesfully established! 😀");
  });

// Initialize app on port
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
