import mongoose  from "mongoose";

export const connectDB = async () =>{
    try {
        // await mongoose.connect("mongodb+srv://ashikurashik20999_db_user:OqMmWE5ZdDpOziEQ@cluster0.jqz12u5.mongodb.net/?appName=Cluster0");
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
        process.exit(1); // Exit with failure
    }
}