// import express from "express";
const express = require('express')
const router = express.Router();


// HOME PAGE
router.get("/",(req,res)=>{
    res.render('index');
})

module.exports = router;
