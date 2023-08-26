const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const { json } = require("body-parser");
mongoose
  .connect("mongodb+srv://rp331563:Rohan1134@ljinsider.ril4fay.mongodb.net/")
  .then(() => console.log("connection successed"))
  .catch((err) => console.log(err));

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  id:{
      type:String,
      default: new Date().toLocaleString()
  }
});

const User = mongoose.model("users", UserSchema);
console.log("App running at 8000");
app.use(express.json());
app.use(cors());

app.post("/", (req, res) => {
  res.send("App is working");
});

app.post("/register", async (req, res, next) => {
  const user = new User(req.body);
  var count = await User.findOne({email: user.email});
  console.log(count);
  if (count != null) {
    if (count.email === user.email){
      res.send({ alert: 1 , email : count.email});
    }else{
      res.send({alert:1})
    }
  } else {
    console.log("next");
    next();
  }
});

app.post("/register", async(req,res) => {
   try{
    const user = new User(req.body);
    result = user.toObject();
    console.log(result);
    await user.save()
    res.send(req.body);
  } catch (e) {
    // console.error(e);
    res.send(e);
  }
});
app.listen(8000);


