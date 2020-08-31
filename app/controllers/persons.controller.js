const db = require("../models");
const Person = db.persons;
const Op = db.Sequelize.Op;

// Create and save a new person
exports.create = (req, res) => {
    // validate request
    if (!req.body.fullname){
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Person
    const person = {
        fullname: req.body.fullname,
        birth: req.body.birth,
        adopted: req.body.adopted ? req.body.adopted : false
    };

    // Save person into database
    Person.create(person)
    .then(data => {
        res.send(data);
    })
    .catch(err =>{
        res.status(500).send({
            message: 
                err.message || "Some error occurred while creating the Person. Try again please."
        });
    });
};

// Retrieve all persons from the database
exports.findAll = (req, res) => {
    const person = req.query.person;
    var condition = person ? { person: { [Op.iLike]: `%${person}%` } } : null;
  
    Person.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Persons."
        });
      });
  };

// Find a person with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    
    Person.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Person with id=" + id
        });
      });
  };

// Update a person by the id
exports.update = (req, res) => {
    const id = req.params.id;
        
    Person.update(req.body, {
        where: { id: id }
    })
    .then(num => {
        if(num == 1){
            res.send({
                message: "Person was updated succesfully"
            });
        }else{
            res.send({
                message: `Can not update person with id = ${id}. Person was not found or ${req.body} is empty.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: `Error updating person with = ${id}`
        });
    });
};

// Delete a person with id
exports.delete = (req, res) => {
    const id = req.params.id;

    Person.destroy({
        where: {id: id }
    })
    .then(num => {
        if( num == 1){
            res.send({
                message: "Person was deleted successfully"
            });
        } else {
            res.send({
                message: `Cannot delet this person with id = ${id}. Person was not found`
            });

        }
    })
    .catch(err => {
        res.status(500).send({
            message: `Could not delete Person with id = ${id}`
        });
    });
}

// Delete all persons from the database
exports.deleteAll = (req, res) => {
    Person.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Persons were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Persons."
          });
        });
};

// Find all published Persons.
exports.findAllAdopted = (req, res) => {
    Person.findAll({ where: { adopted: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving adopted persons."
      });
    });
};

