module.exports = app => {
    const person = require("../controllers/persons.controller.js");

    var router = require("express").Router();

    //  Create a new person
    router.post("/", person.create);

    // Retrieve all persons
    router.get("/", person.findAll);

    // Retrieve all adopted persons
    router.get("/", person.findAllAdopted);

    // Retrieve a person with id
    router.get("/", person.findOne);

    // Update a person with id
    router.put("/:id", person.update);

    // Delete a Person with id
    router.delete("/:id", person.delete);

    // Delete all person
    router.delete("/", person.deleteAll);

    app.use("/api/persons", router);

}