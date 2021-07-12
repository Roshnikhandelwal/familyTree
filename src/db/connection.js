const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/familyTree",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>console.log("connection sucessfull...."))
.catch((err)=>console.log(err));