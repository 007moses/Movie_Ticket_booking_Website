const mongoose= require("mongoose");

const Schema = mongoose.Schema;

const projects =new Schema({
    projectTitle: {
        type: String,
        required: true
    },
    assignTo: {
        type: String,
        required: true
    },
    startsOn: {
        type: Date,
        default: () => Date.now()
    },
    endsOn: {
        type: Date,
        required: true,
    },
    taskStatus: {
        type: String,
        required: true,
    },
    reportTo: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('projects',projects);