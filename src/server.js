const express = require("express");
const app = express();
const bodyparser = require("body-parser");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const routes = require("./app/routes/index");
//let db = require("./app/models")
var cors = require('cors');
app.use(express.json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }))
app.use(cors())
app.use("/v1/api", routes);
//db connection
let port = process.env.PORT || 3001;
app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
});