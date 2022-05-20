import * as md  from "../../data/message.data/message.data.js";
  export default function getAllMessages() {
    return md.getAllMessagesDAO();
  }

  export function createMessage(message){
    return md.createMessageDAO(message);
  }

