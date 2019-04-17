"use strict";

/**
 * Determines if an url is valid
 *
 * @param {string} url
 * @returns {boolean} true/false
 */
const isValidUrl = url => {
  try {
    URL(url);
    return true;
  } catch (err) {
    return false;
  }
};

const getHostName = url => {
  try {
    const Url = new URL(url);
    return Url.hostname.replace("www.", "");
  } catch (err) {
    return url;
  }
};

const pause = ms => new Promise(res => setTimeout(res, ms));

module.exports = {
  isValidUrl,
  getHostName,
  pause
};
