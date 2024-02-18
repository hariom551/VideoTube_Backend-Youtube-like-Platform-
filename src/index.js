// import mongoose from "mongoose";
// require('dotenv').config();
// import {DB_NAME} from "./constants.js"
import express from "express"
const app= express();
import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config();

connectDB();








// ;(async ()=>{
//     try {
//         mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         console.log("Connected to mongodb");
//         app.on("error", (error)=>{
//             console.log("for express not able to talk: ",error);
//             throw error
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listening on port ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.error("ERROR:",error)
//         throw error
//     }
// })()