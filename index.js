import express, { request, response } from 'express'
import 'dotenv/config';
import cors from 'cors';
import connectDB from './dataBase/db.js';
import recepiesRouter from './routes/recipesRouter.js';
import userRouter from './routes/usersRouter.js';
import authRouter from './routes/authRouter.js';
import path from 'path';
import fs from 'fs'


const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors())
app.use('/images',express.static('public/images')) // afichage dans url tous ce qui se trouve dans le dossier public




app.use('/api', userRouter,recepiesRouter, authRouter)

app.get('/public/images/:filename', (req, res) => {
  const file = `public/images/${req.params.filename}`;
  res.sendFile(path.resolve(file));
  });
//Pour  voir tout les images de dossier public
app.get('/images', (req, res) => {
   fs.readdir('public/images', (err, files) => {
   if (err) {
   return res.status(500).send({ error: err });
   }
   res.send({ images: files });
   });
  });


connectDB()

app.listen(PORT, () => {
    console.log(`Bonjour, bienvenue sur mon serveur Express! ${PORT}`);
  });