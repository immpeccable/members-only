let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let MessageSchema = new Schema({

    title: {type: String, required: true},
    message: {type: String, required: true},
    author: {type: Schema.Types.ObjectId, required: true}

})


module.exports = mongoose.model('Message', MessageSchema);