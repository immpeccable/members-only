
let User = require("../models/User");

exports.create_user = function(req, res){

    console.log("sign up")
    let newUser = new User({
        user_name: req.body.user_name,
        password: req.body.password
    });
    newUser.save(err => {
        if(err){
            return next(err);
        }else{
            res.redirect("http://localhost:3001/home");
        }
    })
}

exports.get_user = function(req, res){

    
    User.findOne({_id: req.params.id}, function(err, user){
        if(err){
            res.send(err);
        }else{
            if(user){
                res.send(user);
            }else{
                res.send(null);
            }
        }
    })
}

exports.update_to_member = function(req, res){
    
    console.log("hellooo upate");
    if(req.body["member-key"] === process.env.SECRET_KEY_MEMBER){
        User.findByIdAndUpdate({_id: req.user._id}, {status: "member"}, function(err){
            if(err){
                res.send(err)
            }else{
                res.redirect("http://localhost:3001/home");
            }
        })
    }else{
        res.redirect("http://localhost:3001/home");
    }
}

exports.update_to_admin = function(req, res){
    if(req.body["admin-key"] === process.env.SECRET_KEY_ADMIN){
        User.findByIdAndUpdate({_id: req.user._id}, {status: "admin"}, function(err){
            if(err){
                res.send(err)
            }else{
                res.redirect("http://localhost:3001/home");
            }
        })
    }else{
        res.send("incorrect admin code");
        res.redirect("http://localhost:3001/home");
    }

}
