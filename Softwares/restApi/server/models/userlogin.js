'use strict';
module.exports = function(sequelize, DataTypes) {
  var userlogin = sequelize.define('userlogin', {
    username: DataTypes.STRING,
    lastname: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    dob: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return userlogin;
};