// import mongoose from "mongoose";
// require('dotenv').config();
// import {DB_NAME} from "./constants.js"


import dotenv from "dotenv";
import connectDB from "./db/index.js";
import {app} from './app.js'
dotenv.config();


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is running at port : ${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log("MOngo db connection failed !!! ", error);
})










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