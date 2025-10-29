const express = require("express");
const cors = require("cors")
const app = express();
const mongoose = require("mongoose");
const User = require('./models/User')
const bcrypt = require("bcryptjs");


const salt = bcrypt.genSaltSync(10);
// Store hash in your password DB

app.use(cors())
app.use(express.json());

mongoose.connect('mongodb+srv://blog:zIMDXmAmLNEValQ2@cluster0.0gpdeun.mongodb.net/').then(() => console.log("✅ MongoDB Connected"))
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
  const passOK = bcrypt.compareSync(password, userDoc.password); // true
  if(passOK){
    //loggedIn
  }else{
    res.status(400).json("Wrong Credentials!")
  }

  res.json(userDoc)
})

app.listen(4000, () => {
  console.log("Server running on port 4000");
});

//zIMDXmAmLNEValQ2

