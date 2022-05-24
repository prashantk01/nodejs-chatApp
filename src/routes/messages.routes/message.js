const express = require('express');
// import  express from 'express';
const router = express.Router();
const messageService = require("../../services/messages.services/messageService.js");

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
