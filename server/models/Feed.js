"use strict";

const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  name: String,
  description: String,
  url: String,
  baseUrl: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Feed", Schema);
