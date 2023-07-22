import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';

//Configure ENV
dotenv.config();

//database conig
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(morgan('dev'));

//rest api
app.get('/', (req,res) => {
    res.send("<h1> Welcome to ecommerce app MERN Project</h1>");
});

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
    console.log(`Server running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
});