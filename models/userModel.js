const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({
    name: {
        type : String,
        required : [true, "please add name"]
    },
    email:{
        type : String,
        required : [true, "please add email"],
        unique: true,
        trim: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please enter valid email"
        ]
    },
    password: {
        type : String,
        required : [true, "please add password"],
        minLength : [6, "password must be up to 6 characters"],
    },
    photo: {
        type: String,
        required: [true, "Please add a photo"],
        default: "dp.jpg"
    },
    phone: {
        type: String,
        default: "+91"
    },
    bio: {
        type: String,
        maxLength: [250, "bio must not be more than 250 characters"],
        default: "bio"
    },
},
    {
        timestamps: true, 
    }
);

//   Encrypt password before saving to DB
userSchema.pre("save", async function(next) {
    if(!this.isModified("password")){
        return next();
    }

    //encrpt password 
const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(this.password, salt);
this.password = hashedPassword;
next();
});
  
const User = mongoose.model("User", userSchema);
module.exports = User;
  