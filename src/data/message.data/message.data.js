import mongoose from "mongoose";
import MessageModel from "../../models/schema/messages.schema/message.schema.js";

  export default async function getAllMessagesDAO() {
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

  export  async function createMessageDAO(message){
    let messageCreated = await new MessageModel(message);
    messageCreated.save((err) =>{
    if(err)
    console.log(err);
    return 500;
    })
    console.log("createdMessage: ",messageCreated);
    return messageCreated;
  }