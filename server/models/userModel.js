const mongoose = require('mongoose');

const validateEmail = function(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const userModel = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter you name"],
    },
    email: {
        type: String,
        required: [true, "Please Enter your name"],
        validate: {
            validator: validateEmail,
            message: props=>`${props.value} is not a valid email`
        },
        unique: [true, "Email is already registered"],
    },
    mobile: {
        type: String,
        required: [true, "Please Enter you mobile no."],
        minLength: [10, "Mobile should be of 10 digits"],
        maxLength: [10, "Mobile should be of 10 digits"]
    }, 
    password: {
        type: String,
        required: [true, "Please enter you password"],
        minLength: [6, "Password must contain atleast 6 chars"]
    }
});

module.exports = mongoose.model("User", userModel);