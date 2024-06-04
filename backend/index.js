const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./routes/user_routes.js");
const auth_route = require("./routes/auth_route.js");

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
app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/auth", auth_route);