import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; 

import notesRoutes from './routes/notesRoutes.js';
import {connectDB} from './config/db.js';
import rateLimiter from './middleware/rateLimiter.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware to parse JSON bodies
app.use(cors({
  origin: "http://localhost:5173"
}));
app.use(express.json()); 
app.use(rateLimiter); 

// Routes
app.use("/api/notes", notesRoutes);


const startServer = async () =>{
  try {
    //Connect to MongoDB
    await connectDB();

    //Then start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

  } catch (error) {
    console.error("Error starting server", error);
    process.exit(1); // Exit with failure
  }
}

startServer();


// OqMmWE5ZdDpOziEQ
// mongodb+srv://ashikurashik20999_db_user:OqMmWE5ZdDpOziEQ@cluster0.jqz12u5.mongodb.net/?appName=Cluster0