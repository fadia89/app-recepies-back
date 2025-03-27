import express, { request, response } from 'express'
import 'dotenv/config';
import cors from 'cors';
import connectDB from './dataBase/db.js';


const app = express();
const PORT = process.env.PORT || 8000;


  ;
connectDB()

app.listen(PORT, () => {
    console.log(`Bonjour, bienvenue sur mon serveur Express! ${PORT}`);
  });