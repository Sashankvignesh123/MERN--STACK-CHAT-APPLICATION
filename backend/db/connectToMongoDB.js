import mongoose from "mongoose";
const url = process.env.MONGO_DB_URI || "0.0.0.0:27017";
const connectToMongoDB = async () => {
    try{
        await mongoose.connect(`mongodb://${url}/chat-app`);
        

        console.log("connected to MongoDB");
    }catch(error){
        console.log("Error connecting to MongoDB",error.message);

    }

};
export default connectToMongoDB; 