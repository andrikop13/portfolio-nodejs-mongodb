const express = require("express");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");

const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

const projectRouter = require("./routes/projectRoutes");
const jobRouter = require("./routes/jobRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();

// 1) GLOBAL MIDDLEWARES
// Security HTTP headers
app.use(helmet());

// Middleware for cors policy in development
if (process.env.NODE_ENV === "development") {
  app.use(cors());
}

// Development Logger Middlware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Limit HTTP requests from same IP(s).
const limiter = rateLimit({
  max: 1000,
  windowMs: 60 * 60 * 1000, // 100 per hour --> milliseconds
  message: "Too many requests from this IP. Please try again in an hour!",
});
app.use("/api", limiter);

// Body parser
app.use(express.json({ limit: "5mb" }));

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Prevent parameter polution
app.use(hpp());

app.use("/api/v1/projects", projectRouter);
app.use("/api/v1/jobs", jobRouter);
app.use("/api/v1/users", userRouter);

// Middlware for not found router
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

// Middlware for error handling
app.use(globalErrorHandler);

module.exports = app;
