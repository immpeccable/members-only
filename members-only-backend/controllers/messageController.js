
let Message = require("../models/Message");

exports.get_message_list = function(req, res){
   
    Message.find({}, function(err, result){
        if(err){
            res.send(err)
        }else{
            res.send(result);
        }
    })
}

exports.create_message = function(req, res, next){

  
    let message = new Message({title: req.body.title, message: req.body.message, author: req.user._id});
    message.save(function(err){
        if(err){
            res.send(err)
        }else{
            res.redirect("http://localhost:3001/home");
        }
    })
}

exports.delete_message = function(req, res){

    Message.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            res.send(err)
        }else{
            res.redirect("http://localhost:3001/home");
        }
    })
}