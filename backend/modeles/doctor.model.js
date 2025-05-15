import mongoose from "mongoose";

const doctorSchema=new mongoose.Schema({
    image:{type:String},
    name:{type:String},
    stream:{type:String},
    location:{type:String},
    contact:{type:String},
    email:{type:String},
})

export default mongoose.model.doctor || mongoose.model("doctores",doctorSchema)