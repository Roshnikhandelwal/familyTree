const router = require('express').Router();
require('../db/connection')
const Person = require('../model/person')
const Relation = require('../model/relation')

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
        console.log(showrecords);
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

//crate a relation 
router.post("/:personId/relation",async(req,res)=>{
    //find person
    const person =  await Person.findOne({_id: req.params.personId});

    //create relation
    const relation = new Relation();
    relation.relationtype=req.body.relationtype;
    relation.person=person._id;
    await relation.save();

    //assosiate person with relation
    person.relations.push(relation._id);
    await person.save();

    res.send(relation);
});

router.get("/relation",async(req,res)=>{
    try{
        const emp = await Relation.find({person:req.person._id})
        res.json(emp);
    }catch(err){
        throw err
    }

});
 

module.exports=router;