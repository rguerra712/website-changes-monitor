"use strict";

const { hasUrlHtmlChanged } = require("./monitor");
const { sendAlert } = require("./alert");

module.exports.monitorForChanges = async () => {
  const hasChanged = await hasUrlHtmlChanged();
  if (hasChanged) {
    await sendAlert();
  }
};
