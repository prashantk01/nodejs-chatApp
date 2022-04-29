const mongoose = require("mongoose");
const MessageModel = require("../../models/schema/messages.schema/message.schema.js");
module.exports=class MessageDAO {
  async getAllMessages() {
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

  async createMessge(message){
    let messageCreated = await new MessageModel(message);
    messageCreated.save((err) =>{
    if(err)
    console.log(err);
    return 500;
    })
    console.log("createdMessage: ",messageCreated);
    return messageCreated;
  }
}
