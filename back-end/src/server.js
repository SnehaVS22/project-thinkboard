import express from "express";
import notesRoutes from "./routes/notesRoutes.js"
import{ connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors"


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001

//here was the original ie first place where we placed connectDB();


app.use(
    cors({
        origin:"http://localhost:5173",
    })
);
//middleware
app.use(express.json());// this will parse JSON bodies:will allow access to req.body

//custom made middleware
//app.use((req,res,next)=>{
   // console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
   // next();
//});
app.use(rateLimiter);
app.use("/api/notes",notesRoutes);
app.use(cors());

connectDB().then(()=>{
app.listen(PORT,() =>{
    console.log("Server started on PORT:",PORT);
});
});

