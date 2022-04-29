const MessageDAO = require( "../../data/message.data/message.data.js");

module.exports= class MessageService {
  constructor() {
    this.messageDAO = new MessageDAO();
  }
  getAllMessages() {
    return this.messageDAO.getAllMessages();
  }

  createMessage(message){
    return this.messageDAO.createMessage(message);
  }
}
