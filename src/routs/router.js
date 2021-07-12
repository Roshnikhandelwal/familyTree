const router = require('express').Router();
require('../db/connection')
const Person = require('../model/person')

//create person
router.post('/',async(req, res)=>{
    try{
        const getrecords=new Person(req.body)
        console.log(getrecords);
        const respons = await getrecords.save();
        return res.status(201).send(respons);
    }catch(err){
        res.status(400).send(err);
    }
})
//update person
router.patch('/record/update/:id',async(req, res)=>{
    
    try{
        const showrecords =await Person.find({_id:req.params.id});
        console.log(showrecords)
        const patchrecord = await Person.findByIdAndUpdate({_id:req.params.id},{last_update:showrecords[0].current_update},{
            new:true
        });
        res.send(patchrecord);
    }catch(err){
        res.status(500).send(err);
    }
})

//get data
router.get('/records',async(req, res)=>{
    try{
        const showrecords =await Person.find({});
        res.status(201).send(showrecords);
    }catch(err){
        res.staus(400).send(err);
    }
})
//delete data
router.delete('/record/delete/:id',async(req, res)=>{
    try{
        const deletrecord = await Person.findByIdAndUpdate({_id:req.params.id},{isDeleted:true},{
            new:true
        });
        res.send(deletrecord);
    }catch(err){
        res.status(500).send(err);
    }
 
})
router.patch('/record/restore/:id',async(req, res)=>{
    try{
        const fetchrecord = await Person.findByIdAndUpdate({_id:req.params.id},{isDeleted:false},{
            new:true
        });
        res.send(fetchrecord);
    }catch(err){
        res.status(500).send(err);
    }
 
})




module.exports=router;