const express= require("express");
require("dotenv").config();
const TicketRoutes = require("./Routes/TicketRoutes");
const connectWithDB = require("./Config/mongodbConn");
const mongoose = require("mongoose");
const auth = require("./Middleware/auth");
const User = require("./Models/User");

// const port = 3060;

const port = process.env.PORT

// app.method(path, handler)
// Setting Up Express App

const app= express();
// Middleware

app.use(express.json());

app.use((req,res,next)=>{
    console.log(req.path, req.method);
    next();
})
app.use("/api/dashboard",TicketRoutes)

// Connecting to database

connectWithDB();

// Routes
app.use("/api/auth", require("./Routes/auth"));

// Protected Route Example
app.get("api/protected",auth,(req,res)=>{
    res.json({msg:"Protected route", user:req.user});
})

mongoose.connection.once('open', ()=>{

    // Listening to a Port   
    app.listen (port, () =>{
        console.log("Welcome to Book my Show");
        console.log(`Your Movie ticket Booking application----> Listen to ${port}`);
    });
});

// Error Handling
mongoose.connection.on("error", (error)=>{
    console.log(error.name);
    console.log(error.message);
})




