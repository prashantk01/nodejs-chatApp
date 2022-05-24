// import * as md from "../../data/message.data/message.data.js";
const { getAllMessagesDAO, createMessageDAO } = require("../../data/message.data/message.data.js");
  const getAllMessages=function() {
    return getAllMessagesDAO();
  }

const createMessage = function(message){
    return createMessageDAO(message);
  }

module.exports = { getAllMessages, createMessage };


