import Parser from "rss-parser";
import httpClient from "./httpClient";

export const http = httpClient;

export const isUrlValid = url => {
  try {
    new URL(url);
    return true;
  } catch (err) {
    return false;
  }
};

export const shortTitle = title => {
  return title.substring(0, 35) + "...";
};

const parser = new Parser();
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

export const parseRssFeed = url => {
  return parser.parseURL(CORS_PROXY + url).catch(err => {
    err.type = "rss";
    throw err;
  });
};
