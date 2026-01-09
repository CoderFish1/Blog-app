const express = require("express");
const cors = require("cors")
const app = express();
const mongoose = require("mongoose");
const User = require('./models/User')
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')

const salt = bcrypt.genSaltSync(10);
// Store hash in your password DB
const secret = 'agasfjb3wljhbt3t2wgaihasiha';

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));
app.use(express.json());   
app.use(cookieParser());   

require('dotenv').config()

mongoose.connect(process.env.MONGO_URI).then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));


// POST -> send data to the server from client side(frontend)
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create(
      {
        username,
        password: bcrypt.hashSync(password, salt),
      })
    res.json(userDoc);
  }
  catch (e) {
    res.status(400).json(e);
  }
});

app.post('/login', async (req, res)=>{
  const {username, password} = req.body;
  const userDoc = await User.findOne({username})
  if (!userDoc) return res.status(400).json("User not found");

  const passOK = bcrypt.compareSync(password, userDoc.password); // true
  if(passOK){
    //loggedIn
    jwt.sign({username, id:userDoc._id}, secret, {},
      (err, token) => {
        if (err) throw err;
        res.cookie('token', token).json({
          id:userDoc._id,
          username,
        });
      }
    )
  }else{
    res.status(400).json("Wrong Credentials!")
  }
})

app.get('/profile', (req,res)=>{
  const {token} = req.cookies;

  if (!token) {
    return res.status(401).json("No token");
  }

  jwt.verify(token, secret, {}, (err, info)=>{
    if(err) throw err; 
    res.json(info) // info from jwt.verify() contains the data stored inside that token
  })
})

app.post('/logout', async (req, res)=>{
  res.cookie('token', '').json('ok')
})

app.listen(4000, () => {
  console.log("Server running on port 4000");
});



