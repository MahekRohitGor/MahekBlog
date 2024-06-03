const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./routes/user_routes.js");

dotenv.config();

mongoose.connect("mongodb+srv://1mahekgor1:zxb5lM3GOkEt8s1Y@cluster0.3urrgff.mongodb.net/blogdata1").then(
    () => {console.log("MongoDB Connected")}
).catch(err =>{
    console.log(err);
});

const app = express();
app.listen(3000, ()=>{
    console.log("Server started at port 3000");
});


app.use("/api/user", userRoutes)