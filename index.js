import express, { request, response } from 'express'
import 'dotenv/config';
import cors from 'cors';
import connectDB from './dataBase/db.js';
import recipesRouter from './routes/recipesRouter.js';


const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors())
app.use('/api', recipesRouter)


connectDB()

app.listen(PORT, () => {
    console.log(`Bonjour, bienvenue sur mon serveur Express! ${PORT}`);
  });