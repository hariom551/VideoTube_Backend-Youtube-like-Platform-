import express from "export"
import cors from "cors"
import cookieParser from "cookie-parser";
const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true 
}))

app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true, limit:"16kb"}))   // in url encoded like special character hariom%20nathani this type, extended are use for nested but most of case not required
app.use(express.static("public"))   //  public is a folder for pdf, image 
app.use(cookieParser())    // server se user ka browser k andr ka cookie access kr pau ar uski cookie set bhi kr paye


export {app}