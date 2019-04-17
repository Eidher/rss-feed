"use strict";

const express = require("express");
const path = require("path");
const logger = require("morgan");
const bodyParser = require("body-parser");
const debug = require("debug")("univision:app");
const mongoose = require("mongoose");

// Routes
const routes = require("./routes");

// Creating Mongo connection
mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => debug("Mongo connection successful!"))
  .catch(err => debug("Error connection to Mongo: ", err));

const app = express();

// Attach logger and other dependencies
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: "false" }));
app.use(express.static(path.join(process.cwd(), "dist")));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api/feeds", routes.feeds);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// Error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  debug("Error: ", err);

  // Renders the error page
  res.status(err.status || 500);
  res.json({ err: err.message });
});

module.exports = app;
