// import * as md from "../../data/message.data/message.data.js";
const messageData = require("../../data/message.data/message.data.js");
  const getAllMessages=function() {
    return messageData.getAllMessagesDAO();
  }

const createMessage = function(message){
    return messageData.createMessageDAO(message);
  }

module.exports = { getAllMessages:getAllMessages, createMessage:createMessage };


