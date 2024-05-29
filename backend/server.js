import path from "path";
import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/messages.routes.js";
import UserRoutes from "./routes/user.routes.js";


import connectToMongoDB from "./db/connectToMongoDB.js";
import {app,server} from "./socket/socket.js"




 
dotenv.config();

const __dirname = path.resolve();



app.use(cors());
const PORT = process.env.port || 5000;

app.use(express.json());//to parse the incoming requests with json payloads(from req.body)
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes );
app.use("/api/users",UserRoutes );

app.use(express.static(path.join(__dirname, "/frontend/vite-project/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend","vite-project", "dist", "index.html"));
});





//app.get("/",(req,res)=>{
    //root route http://localhost:5000/
   // res.send("Hello World!!");
//});



server.listen(PORT, ()=> {
    connectToMongoDB();
     console.log(`server running on port ${PORT}`)

     });