import express from "express";
import notesRoutes from "./routes/notesRoutes.js"
import{ connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";
import path from "path";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001
const _dirname=path.resolve();

//here was the original ie first place where we placed connectDB();

if(process.env.NODE_ENV !== "production"){
app.use(
    cors({
        origin:"http://localhost:5173",
    })
);};
//middleware
app.use(express.json());// this will parse JSON bodies:will allow access to req.body

//custom made middleware
//app.use((req,res,next)=>{
   // console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
   // next();
//});
app.use(rateLimiter);
app.use("/api/notes",notesRoutes);
//{
if(process.env.NODE_ENV === "production"){
//middleware from express these are used to deploy it without having cors errors
app.use(express.static(path.join(_dirname,"../front-end/dist")));
//if any other rather than api/notes
app.get("*",(req,res) => {
    res.sendFile(path.join(_dirname,"../front-end","dist","index.html"))
});};
//}only if it is in production ie,its own render.com
app.use(cors());

connectDB().then(()=>{
app.listen(PORT,() =>{
    console.log("Server started on PORT:",PORT);
});
});

