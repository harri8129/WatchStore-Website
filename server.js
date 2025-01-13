import  Express  from "express";
import  Color from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoute.js'
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoute.js'
import cors from "cors";

//configure env 
dotenv.config();

//database config 
connectDB();

//rest object
const app = Express()

//middleware 
app.use(cors())
app.use(Express.json())
app.use(morgan('dev'))

//routes
app.use("/api/v1/auth",authRoutes );
app.use("/api/v1/category",categoryRoutes);
app.use("/api/v1/product",productRoutes);


//rest api 
app.get('/', (req,res)=>{
    res.send("<h1> welcome to ecomm web </h1>");
});

//PORT
const PORT=process.env.PORT || 8000;

//run listen 
app.listen(PORT,()=>{
    console.log(`server is running on ${process.env.dev_mode} mode on port ${PORT}`.bgCyan.white);
});
