
const express = require("express");
const app = express();
const pug=require("pug");
const path = require("path");
const port= process.env.port||4000;
require('./src/db/connection')
const Person = require('./src/model/person')
const Relation = require('./src/model/relation')
const router =require('./src/routs/router')
const PersonData= Person.find({})

app.use(express.json());
app.use(express.static('./public/css/index'))
//views engine setup
app.set("views",path.join(__dirname,"views"));
app.set('view engine','ejs');
app.use(router);


app.get("/home",function(req,res){
    PersonData.exec(function(err,data){
    if (err) throw err;
    res.render("index.ejs",{title:'Records',records:data});
    });
    
});


app.listen(port,()=>{
    console.log(`listen port on ${port}`);
})