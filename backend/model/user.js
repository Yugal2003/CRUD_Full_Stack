const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId : {
        type : Number,
        required : true,
        unique : true
    },
    name : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true,
        default : 0
    },
    salary : {
        type : Number,
        required : true,
        default : 0
    },
    jobTitle : {
        type : String,
        required : true
    }
})

const userModel = mongoose.model('user_crud_operation',userSchema);
module.exports = userModel;