const User = require("../models/user_model.js");
const bcryptjs = require('bcryptjs');
const {errorHandler} = require("../utils/error.js");

const signup = async (req,res, next)=>{
    const {username, email, password} = req.body;
    if(!username || !email || !password || username=== '' || email=== '' || password === ''){
        next(errorHandler(400, 'All fields are required'));
    }
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({
        username,
        email,
        password: hashedPassword,
    });
    try{
        await newUser.save();
        res.json("Signup successful");
    }
    catch(error){
        if (error.code === 11000) {
            // Duplicate key error
            if (error.keyPattern && error.keyPattern.username) {
                return next(errorHandler(400, 'Username already exists'));
            }
            if (error.keyPattern && error.keyPattern.email) {
                return next(errorHandler(400, 'Email already exists'));
            }
        }
        next(error);
    }
}

module.exports = {signup};