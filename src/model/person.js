const mongoose=require("mongoose");
const Schema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true,
        trim:true
    },
    dob:{
        type:String,
        required:true,
        trim:true
    },
    city:{
        type:String,
        required:true,
        trim:true
    },
    created_at:{
        type:Date,
        required:true,
        default:Date.now,
        timestamps:true
    },
    isDeleted:{
        default:false
        
    },
    identifier:{
        type:String,
        
    },
    current_update:{
        type:Date,
        required:true,
        default:Date.now,
        timestamps:true
    },
    last_update:{
        type:Date,
        
      
    }

})
const Person=new mongoose.model("Person",Schema)
module.exports = Person;
