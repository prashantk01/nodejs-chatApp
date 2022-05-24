// import mongoose from "mongoose";
const mongoose = require("mongoose")
mongoose.Schema.Types.String.set("trim", true);

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  message: {
    type: String,
  },
});

messageSchema.set("toObject", { virtuals: true });
messageSchema.set("timestamps", true);

messageSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform(doc, ret) {
    delete ret.id;
  },
});

 const MessageModel =
   mongoose.model("Message", messageSchema);
  
module.exports = MessageModel;
