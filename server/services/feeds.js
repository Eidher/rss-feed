"use strict";

const debug = require("debug")("univision:services");
const { Feed } = require("../models");
const { getHostName, pause } = require("../utils");

/**
 * Get all feeds
 *
 * @returns {Array}
 */
const getAll = async (from, size) => {
  try {
    const feeds = await Feed.find({})
      .skip(parseInt(from, 10))
      .limit(parseInt(size, 10))
      .sort("-createdAt")
      .lean()
      .exec();

    await pause(1000);

    return feeds.map(feed => {
      const mappedFeed = { ...feed };
      mappedFeed.id = feed._id.toString();
      delete mappedFeed._id;
      delete mappedFeed.createdAt;
      delete mappedFeed.__v;
      return mappedFeed;
    });
  } catch (err) {
    debug("Error: ", err);
    throw err;
  }
};

/**
 * Adds a new feed
 *
 * @returns
 */
const add = async data => {
  try {
    const feed = {
      ...data,
      name: getHostName(data.baseUrl)
    };

    // await pause(2000);

    const model = new Feed(feed);
    const result = await model.save();
    return result._doc;
  } catch (err) {
    debug("Error: ", err);
    throw err;
  }
};

module.exports = {
  getAll,
  add
};
