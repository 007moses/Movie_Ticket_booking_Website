const express =require("express");

const router = express.Router();

const {
    getTickets,
    getTicket,
    CreateTicket,
    UpdateTicket,
    deleteTicket,
}= require("../Controllers/TicketController") 

router.get("/", getTickets);

router.post("/", CreateTicket);

router.get("/:id", getTicket);

router.put("/:id", UpdateTicket);

router.delete("/:id", deleteTicket);

module.exports = router;

