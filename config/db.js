import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();
const mongourl=process.env.MONGO_URL|| "mongodb://localhost:27017/TelegramBot"

export const connectDB=mongoose.connect(mongourl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("DB Connected Successfully");
}).catch(() =>{
    console.log("DB Connection Failed");
    console.log(err);   
    process.exit(1);
});

export default connectDB;