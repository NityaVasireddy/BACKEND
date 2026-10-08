const mongoose=require("mongoose");
const connectDB=async()=>{
    try{
        const connection=await mongoose.connect(process.env.MONGODB_URI);
        console.log("data base connected successfully");

    }
    catch(err){
        console.log("data base connection failed");
        console.log(err);
        process.exit(1);
    }
}
module.exports=connectDB;