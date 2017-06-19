'use strict';
module.exports = function(sequelize, DataTypes) {
  var resource_project_assosiation = sequelize.define('resource_project_assosiation', {
  }, {
    classMethods: {
      associate: function(models) {
        resource_contact.hasMany(models.resources,models.projects,{
          foreignKey :{
            resource_id : "id",
            project_id : "id"
          },
          onDelete:"CASCADE"
        })

        // associations can be defined here
      }
    }
  });
  return resource_project_assosiation;
};
