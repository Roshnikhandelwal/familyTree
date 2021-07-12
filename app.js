
const express = require("express");
const app = express();
const port= process.env.port||4000;
require('./src/db/connection')
const Person = require('./src/model/person')
const router =require('./src/routs/router')

app.use(express.json());
app.use(router);

app.listen(port,()=>{
    console.log(`listen port on ${port}`);
})