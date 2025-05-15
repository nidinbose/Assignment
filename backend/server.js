import express from "express";
import env from "dotenv";
import cors from "cors";
import connection from "./connections/mongooseConnection.js";
import router from "./routers/router.js";


const app=express();
env.config();

app.use(cors());
app.use(express.json({limit:"50mb"}));
app.use('/api',router)

connection().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`http://localhost:${process.env.PORT}`);
        
    })
}).catch((error)=>{
    console.log("Error in server interation",error);
    
})