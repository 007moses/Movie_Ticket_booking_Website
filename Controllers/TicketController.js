const mongoose = require("mongoose");
const TicketModel = require("../Models/TicketModel");

const getTickets = async (req,res)=>{
    try {
        const projects = await TicketModel.find({})
        res.status(200).json(projects);
    }
    catch (error) {

        res.status(400).json({message: error.messege});
    }
};
const getTicket = async (req,res)=>{
       
   try{
    const {id} = req.params;
    const project = await TicketModel.findById(id);
    res.status(200).json(project);
   }
   catch (error) {
    res.status(400).json({
     error: error.messege,
 })} }

const CreateTicket= async (req,res)=>{    
  try {
    const project = await TicketModel.create(req.body);
    res.status(200).json(project);

  } catch (error) {
    console.log(error.message);
    res.status(400).json({message:error.message});
  }
}
const UpdateTicket = async (req,res)=>{
   try {
    const {id} =req.params;
    const project = await TicketModel.findByIdAndUpdate(id, req.body);
    if(!project)
    {
        return res.status(404).json({message:`cannot find any product with ID ${id}`})
    }
    const UpdatedProject = await TicketModel.findById(id);
    res.status(200).json(UpdatedProject);
    } catch (error) {
        res.status(500).json({message: erro.message});
    }
}

const deleteTicket = async (req,res)=>{
    try {
       const {id} = req.params;
       const project = await TicketModel.findByIdAndDelete(id); 
       if(!project){
        return res.status(404).json({message: `cannot find any project with ID ${id}`})
    }
    res.status(200).json(project);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}



module.exports= { getTickets,getTicket,CreateTicket,UpdateTicket,deleteTicket}
    