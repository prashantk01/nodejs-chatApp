const express = require('express');
const router = express.Router();
const MessageService = require("../../services/messages.services/message.service.js");
const messageService = new MessageService();

router.get(
  "/",
  async (req, res) => {
    let response = await messageService.getAllMessages();
    res.render('index')
  }
);

router.post('/',
async (req, res) => {
  let message= req.body;
  let response = await messageService.createMessage(message);
  if(!response)
    res.send(500);
  res.send(200);
})

module.exports = router;
