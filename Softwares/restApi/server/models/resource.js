'use strict';
module.exports = function(sequelize, DataTypes) {
  var resource = sequelize.define('resource', {
    fistname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    password: DataTypes.STRING,
    dob: DataTypes.DATE,
    joindate: DataTypes.DATE,
    enddate: DataTypes.DATE,
    role: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return resource;
};