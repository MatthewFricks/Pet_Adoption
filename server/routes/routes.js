const PetController = require('../controllers/controller');

module.exports = function(app){
    app.post("/api/pet", PetController.createNewPet)
    app.get("/api/pet", PetController.getAllPets);
    app.get("/api/pet/:id", PetController.getOnePet);
    app.put("/api/pet/:id", PetController.updateExistingPet);
    app.delete("/api/pet/:id", PetController.deletePet);
}