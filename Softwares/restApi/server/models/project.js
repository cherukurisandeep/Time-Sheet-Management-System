'use strict';
module.exports = function(sequelize, DataTypes) {
  var project = sequelize.define('project', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    startdate: DataTypes.DATE,
    enddate: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return project;
};