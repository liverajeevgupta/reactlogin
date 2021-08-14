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

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const User = new mongoose.model("User", userSchema);

// routes
app.post('/login', ( req, res ) => {
    const {email, password} = req.body;
    User.findOne({email:email} , (err, user) => {
        if(user) {
            if(password === user.password) {
                res.send({message:"Login successfully"});
            } else {
                res.send({message:"Invalid info login/password!!"});
            }
        }
    })
});

app.post('/register', ( req, res ) => {
    const {name, email, password} = req.body;
    User.findOne({email:email}, (err, user) => {
        if (user) {
            res.send({message: "User is already registered"})
        } else {
            const user = new User({
                name,
                email,
                password
            });
            user.save(err => {
                if(err) {
                    res.send(res);
                } else {
                    res.send({message: "User has been successfully registered"});
                }
            });
        }
    });
});

app.listen(9002, () => {
    console.log('Be started at port 9002');
}); 