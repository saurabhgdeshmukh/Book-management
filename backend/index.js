import express from  "express";
import {PORT,mongoDBURL} from "./config.js"
import mongoose from "mongoose";
import booksRoute from './route/bookRoute.js';
import cors from 'cors';
const app=express();
app.use(express.json());
app.get('/',(req,res)=>
{
   console.log(req);
   return res.status(234).send('BOOK'); 
})

app.use(cors());
app.use('/books', booksRoute);
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
