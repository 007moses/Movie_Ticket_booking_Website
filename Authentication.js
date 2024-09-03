const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const CustomerModel = require("./Models/customer")

const app = express()
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb+srv://moses05112000:RiZxl9iARFIhaZQL@mycluster.7emtceg.mongodb.net/Customer?retryWrites=true&w=majority&appName=Mycluster")

app.post("/login", (req,res)=>{
    const {email, password} = req.body
    CustomerModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json({message:"Success"})
            } else {
                res.json("the password is incorrect")
            }
        } else {
            res.json("No record existed")
        }
    })
})

app.post("/register", (req,res)=>{
    CustomerModel.create(req.body)
    .then(customers => res.json(customers))
    .catch(err => res.json(err))
})



app.listen(3001, ()=>{
    console.log("server is running")
})

