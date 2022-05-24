// import { createMessage } from "../services/messages.services/messageService.js";
const messageService = require("../services/messages.services/messageService.js")

// SEED DB
const seedDB = function () {
    
        let messages = [
            {
                name: "User1",
                message: "Hi There"
            },
            {
                name: "User2",
                message: "Hii.."
            },
        ]
       
        for (let i = 0; i < messages.length; i += 1) {
            messageService.createMessage(messages[i]);
        }
};

module.exports = seedDB;