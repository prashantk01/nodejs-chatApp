import { createMessage } from "../services/messages.services/messageService.js";

// SEED DB
export default function seedDB() {
    
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
            createMessage(messages[i]);
        }
};