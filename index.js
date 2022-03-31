// require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
// const stores = require('./routes/stores')

// var bodyParser = require("body-parser");
// app.use(bodyParser.json());

app.get('/', (req, res)=>{
  res.send("hello world")
})

// app.use('/store', stores)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
