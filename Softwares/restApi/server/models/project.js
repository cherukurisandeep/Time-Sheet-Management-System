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
        project.belongsToMany(models.Resource,{
          through :models.resource_project_assosiation,
          as: 'Resource',
          foreignKey: {
            name: "project_id",
            allowNull: false
          }
        })
        // associations can be defined here
      }
    }
  });
  return project;
};
