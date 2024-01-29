import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors  from 'cors';
import dotenv from 'dotenv';
import reportRouter from './routes/index.js'






mongoose.connect('mongodb://127.0.0.1:27017/ourReportData', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

dotenv.config();
const app=express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.urlencoded({ extended: true }));


app.use(cors({
    origin: 'http://localhost:3000',
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }));




//api routes spilliting

app.use("/api/data", reportRouter)




app.get('/client',(req,res)=>{
    res.send('hi');
})



app.listen(5001,()=>{
    console.log('surver is running')
})