
let messageController = require("../controllers/messageController");
let userController = require("../controllers/userController");
const express = require('express')
const router = express.Router()
var async = require('async');

const passport = require('passport');

router.get("/", messageController.get_message_list);

router.post("/log-in", function(req, res, next){
  
  console.log(req.body);
  
    passport.authenticate("local", (err, user, info) => {
        if(err){
            res.send(err);
        }
        if(!user){
            res.send("There is no User");
        }else{
            req.logIn(user, err => {
                if(err){
                    res.send(err);
                }else{
                    res.redirect("http://localhost:3001/home");
                    console.log(req.user);
                }
            })
        }
        
    })(req, res, next)
  
  
});

router.get("/get-user/:id", userController.get_user);

router.get("/log-in", function(req, res,next){
    //console.log("merhaba");
    //console.log(req.user);
    res.send({logStatus: req.user ? true : false, userInfo : req.user ? req.user : null});
})

router.post("/log-out", function(req, res, next){
    req.logOut();
    res.redirect("http://localhost:3001/home");
})

router.post("/become-member", userController.update_to_member);
router.post("/become-admin", userController.update_to_admin);

router.post("/sign-up", userController.create_user)

router.post("/create-message", messageController.create_message)

router.post("/delete-message/:id", messageController.delete_message);

module.exports = router;
