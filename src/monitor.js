"use strict";

const axios = require("axios");

let html = undefined;

module.exports.hasUrlHtmlChanged = async () => {
  const { URL_TO_MONITOR: url } = process.env;
  if (!url) {
    throw new Error("URL_TO_MONITOR not set in environment variables");
  }
  const response = await axios.default.get(url);
  if (response.status !== 200) {
    throw new Error(
      `Unexpected status ${response.status} when checking URL ${url}`
    );
  }
  const newHtml = response.data;
  if (!html) {
    html = newHtml;
  }
  const hasChanged = html !== newHtml;
  html = newHtml;
  return hasChanged;
};
