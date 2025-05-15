 import mongoose from 'mongoose'

 const bookingSchema=new mongoose.Schema({
    name:{type:String},
    date:{type:String},
    time:{type:String},
    status:{type:String},
     doctorId:{type:String},

 })
 export default mongoose.model.booking || mongoose.model("bookings",bookingSchema)