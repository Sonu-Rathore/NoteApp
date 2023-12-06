const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name : {
        type: String,
        required: false
    },
    phone : {
        type : String,
        required : true
    },
    otp : {
        type : String,
        required : false
    }
},{timestamps: true});

module.exports = mongoose.model("User",UserSchema);