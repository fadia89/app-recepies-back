import express, { request, response } from 'express'
import 'dotenv/config';
import cors from 'cors';
import connectDB from './dataBase/db.js';
import recepiesRouter from './routes/recipesRouter.js';
import userRouter from './routes/users.js';
import authRouter from './routes/authRouter.js';


const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors())
app.use('/api', recepiesRouter, userRouter, authRouter)


connectDB()

app.listen(PORT, () => {
    console.log(`Bonjour, bienvenue sur mon serveur Express! ${PORT}`);
  });