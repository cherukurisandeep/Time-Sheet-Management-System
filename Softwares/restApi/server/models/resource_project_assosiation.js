'use strict';
module.exports = function(sequelize, DataTypes) {
  var resource_project_assosiation = sequelize.define('resource_project_assosiation', {
  }, {
    classMethods: {
      associate: function(models) {
        resource_project_assosiation.belongsTo(models.resources,{
          foreignKey :{
            name  : "resource_id",
            allowNull : false
          },
          onDelete:"CASCADE"
        })
        resource_project_assosiation.belongsTo(models.project,{
          foreignKey :{
            name : "project_id",
            allowNull : false
          }
        })

        // associations can be defined here
      }
    }
  });
  return resource_project_assosiation;
};
