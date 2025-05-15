
import doctor from '../modeles/doctor.model.js'


export async function addHello(req,res){
 try {
    const {image,name,stream,location,contact,email}=req.body

    if(!name || !stream || !location  || !contact || !email || !image)
        return res.status(400).json({message:"fields are empty"})
    const data =await doctor.create({name,stream,location,contact,email,image})
    if(!data){
        return res.status(401).json({message:"Adding Error"})
    }else{
        return res.status(200).json({message:"Added Successfully"})
    }
 } catch (error) {
    return res.status(500).json({message:"Internal errror in adding data "})
 }  
}

export async function getHello(req,res){
    try {
        const data=await doctor.find({})
        if(!data)
            return res.status(404).send("No data available")
        else{
            return res.status(200).send(data)
        }
    } catch (error) {
        return res.status(500).json({message:'Internal error in getting data'})
    }
}


export async function getHelloById(req,res){
    try {
        const {id}=req.params
        const data = await doctor.findOne({_id:id})
        if(!data)
            return res.status(404).json({message:"No data available check the Id"})
        else{
            return res.status(200).send(data,"Fetched Successfully")
        }
    } catch (error) {
        return res.status(500).json({message:"Internal error in getting data with Id "})
    }
}

export async function updateById(req, res) {
  try {
    const { id } = req.params;
    const update = req.body;

    if (!id || !update || Object.keys(update).length === 0) {
      return res.status(400).json({ message: "ID and update data are required" });
    }

    const data = await doctor.findByIdAndUpdate(id, update, {
      new: true,
      runValidators: true,
    });

    if (!data) {
      return res.status(404).json({ message: "Item not found for update" });
    }

    return res.status(200).json({ message: "Data updated successfully"});
  } catch (error) {
    console.error("Update error:", error);
    return res.status(500).json({ message: "Internal error in updating data" });
  }
}

export async function deleteDoctor(req, res) {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "Doctor ID is required" });
    }

    const deletedDoctor = await doctor.findByIdAndDelete(id);

    if (!deletedDoctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    return res.status(200).json({ message: "Doctor deleted successfully" });
  } catch (error) {
    console.error("Delete error:", error);
    return res.status(500).json({ message: "Internal error in deleting doctor" });
  }
}