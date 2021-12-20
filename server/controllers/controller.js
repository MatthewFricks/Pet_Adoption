const Pet = require("../models/model");

module.exports.createNewPet = (req,res)=>{
    Pet.create(req.body)
        .then(newPetObj=>{
            res.json({results: newPetObj})
        })
        .catch(err=>{
            res.json({err:err})
        })
}

module.exports.getAllPets = (request, response) => {
    Pet.find({})
        .then(pets => response.json(pets))
        .catch(err => response.json(err))
}

module.exports.getOnePet = (req,res)=>{
    console.log("trying to find one pet!")
    console.log(req.params.id)
    Pet.findOne({_id:req.params.id})
        .then(foundPet=>{
            res.json({results: foundPet })
        })
        .catch(err=>{
            res.json({err:err})
        })
}

module.exports.updateExistingPet = (req, res) => {
    Pet.findOneAndUpdate(
        { _id: req.params.id },
        req.body, 
        { new: true, runValidators: true } 
    )
        .then(updatedPet => {
            res.json({ results: updatedPet })
        })
        .catch(err=>{
            res.json({err:err})
        })
        
}

module.exports.deletePet = (req,res)=>{
    Pet.deleteOne({_id: req.params.id})
        .then(deletedPet =>{
            res.json({results: deletedPet})
        })
        .catch(err=>{
            res.json({err:err})
        })
}
