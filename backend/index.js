const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(process.env.MONGO).then(
    () => {console.log("MongoDB Connected")}
).catch(err =>{
    console.log(err);
});

const app = express();
app.listen(3000, ()=>{
    console.log("Server started at port 3000");
});