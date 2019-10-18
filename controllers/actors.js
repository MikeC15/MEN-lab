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
router.get("/:id", (req,res)=>{
    Actor.findById(req.params.id, (err, foundActor)=>{
        if(err){
            res.send(err)
        }else{
            res.render("show.ejs", {
                actor: foundActor
            })
        }
    })
})

// index route
router.get("/", (req,res) =>{
    Actor.find({}, (err, foundActors) => {
        if (err){
            res.send(err)
        } else{
            res.render("index.ejs", {
                actors: foundActors
            })
        }
    })
})

// destroy route
router.delete("/:id", (req,res)=>{
    Actor.findByIdAndDelete(req.params.id, (err) => {
        if (err) {
            res.send(err)
        } else {
            res.redirect('/actors');

        }
    })
})

module.exports = router;