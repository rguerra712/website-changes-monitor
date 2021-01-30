"use strict";

const { SNS } = require("aws-sdk");

module.exports.sendAlert = async () => {
  const { MESSAGE_WHEN_CHANGED: message, SNS_TOPIC_ARN: arn } = process.env;
  var params = {
    Message: message,
    TopicArn: arn,
  };

  await new SNS({ apiVersion: "2010-03-31" }).publish(params).promise();
};
