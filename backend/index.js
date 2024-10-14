const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const port = 7777;
const app = express();
dotenv.config();

const userRouter = require('./routes/user');

mongoose.connect(process.env.DATABASE_URL)
  .then(() => console.log('MongoDB Connected Successfully!'))
  .catch((error) => console.error('Error while connecting to MongoDB:', error));

app.use(express.json());
app.use(userRouter);

app.listen(port,()=>{
    console.log(`Server Running On Port : ${port}`);
})