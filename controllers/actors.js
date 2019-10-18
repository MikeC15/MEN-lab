const express = require("express")
const router = express.Router();

const Actor = require("../models/actors.js")



// //controllers

// new route
router.get("/new", (req, res) => {
    res.render("new.ejs")
})

// create route
router.post("/", (req, res) => {
    console.log(req.body)
    Actor.create(req.body, (err, createdActor) =>{
        if(err){
            res.send(err)
        } else{
            console.log("CREATED:", createdActor)
            res.redirect('/actors')
        }
    })
})

// edit route

// update route 

// show route

// index route

// destroy route

module.exports = router;