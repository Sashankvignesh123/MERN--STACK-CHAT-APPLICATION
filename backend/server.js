 
import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/messages.routes.js";
import UserRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
const app = express();
const port = process.env.port || 5000;


dotenv.config();

app.use(express.json());//to parse the incoming requests with json payloads(from req.body)
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes );
app.use("/api/users",UserRoutes );




//app.get("/",(req,res)=>{
    //root route http://localhost:5000/
   // res.send("Hello World!!");
//});



app.listen(port,() =>{
    connectToMongoDB();
     console.log(`server running on port ${port}`)

     });