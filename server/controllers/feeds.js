"use strict";

const { feeds } = require("../services");

const sendError = (err, res) => {
  res.status(err.status || 500);
  res.json({ message: err.message });
};
/**
 * Gets all the products
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getAllFeeds = async (req, res) => {
  try {
    const { from = 0, size = 9 } = req.query;

    const result = await feeds.getAll(from, size);
    return res.json(result);
  } catch (err) {
    return sendError(err, res);
  }
};

/**
 * Gets products by id list
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const addFeed = async (req, res) => {
  try {
    const data = req.body;
    const doc = await feeds.add(data);
    return res.json({
      message: "Feed added successfully.",
      feed: doc
    });
  } catch (err) {
    return sendError(err, res);
  }
};

module.exports = {
  getAllFeeds,
  addFeed
};
