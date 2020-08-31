module.exports = (sequelize, Sequelize) => {
    const Persons = sequelize.define("persons", {
      fullname: {
        type: Sequelize.STRING
      },
      birth: {
        type: Sequelize.DATE
      },
      adopted: {
        type: Sequelize.BOOLEAN
      }
    
    });
  
    return Persons;
  };