import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

mongoose.connect("mongodb://localhost:27017/reactloginDb", {
    useNewUrlParser:true,
    useUnifiedTopology: true
}, () => {
    console.log('DB connected!!');
});

// routes
app.get('/', ( req, res ) => {
    res.send('My API');
});

app.listen(9002, () => {
    console.log('Be started at port 9002');
});