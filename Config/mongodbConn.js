const mongoose= require("mongoose");

const MDB_CONNECT_STR =process.env.CONNECT_STR;

const connectDB = async () => {
    await mongoose.connect(MDB_CONNECT_STR)
    .then(()=>{
    console.log("welcome to Mongo DB!");
    console.log("Hurray! Connected to DB!")
    })
    .catch((error)=>{
        console.log(error.name);
        console.log(error.message);
    });
};


// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.CONNECT_STR);
//         console.log("Hey! Connected to Database!!");
//     } catch (error) {
//         console.log(error.message);
//     }
// }

module.exports = connectDB;


