let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let UserSchema = new Schema({

    user_name: {type: String, required: true},
    password: {type: String, required: true},
    status: {type: String, required: true, default: "none"}
})


module.exports = mongoose.model('User', UserSchema);