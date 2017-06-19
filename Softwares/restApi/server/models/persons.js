'use strict';
module.exports = function(sequelize, DataTypes) {
  var persons = sequelize.define('persons', {
    username: DataTypes.STRING,
    lastname: DataTypes.STRING,
    dob: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return persons;
};