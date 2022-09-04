exports.listenToUnhadledErrors = (server) =>
  process.on("unhandledRejection", (err) => {
    console.log(err.name, err.message);
    console.log("UNHANDLER REJECTION! 🥵 Shuttting down...");
    server.close(() => {
      process.exit(1);
    });
  });

exports.listenToUnCaughtExceptions = () =>
  process.on("uncaughtException", (err) => {
    console.log(err.name, err.message);
    console.log("UNCAUGHT EXCEPTION! 🥵 Shuttting down...");
    process.exit(1);
  });
