// import mongoose from "mongoose";
const mongoose = require("mongoose")
// import MessageModel from "../../models/schema/messages.schema/message.schema.js";
const MessageModel = require("../../models/schema/messages.schema/message.schema.js");

  const getAllMessagesDAO=async function () {
    let messages;
    try {
      facilities = await MessageModel.find({});
    } catch (err) {
     console.log(err);
    }
    if (!messages) {
      return [];
    }
    return messages;
  }

  const createMessageDAO=  async function (message){
    let messageCreated = await new MessageModel(message);
    messageCreated.save((err) =>{
    if(err)
    console.log(err);
    return 500;
    })
    console.log("createdMessage: ",messageCreated);
    return messageCreated;
  }

module.exports = { getAllMessagesDAO, createMessageDAO };