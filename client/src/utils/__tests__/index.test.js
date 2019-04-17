import Parser from "rss-parser";
import { isUrlValid, parseRssFeed } from "../index";

describe("Utils", () => {
  describe("isValidUrl", () => {
    it("should return true", () => {
      expect(isUrlValid("http://www.google.com")).toBe(true);
    });

    it("should return false", () => {
      expect(isUrlValid("non-url")).toBe(false);
    });
  });
});
