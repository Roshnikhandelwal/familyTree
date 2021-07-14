const mongoose=require("mongoose");
const Relation_Schema= new mongoose.Schema({
    relationtype:{
        type:String,
        required:false
    },
    person:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Person",
        required:"person is required field"

    }
   
        

})
const Relation=new mongoose.model("Relation",Relation_Schema)
module.exports = Relation;