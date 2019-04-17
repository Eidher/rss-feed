"use strict";

const express = require("express");

const router = express.Router();
const { feeds } = require("../controllers");

// Get all feeds
router.get("/", feeds.getAllFeeds);

// Add new feed
router.post("/", feeds.addFeed);

module.exports = router;
