'use strict';
module.exports = function(sequelize, DataTypes) {
  var Resource = sequelize.define('Resource', {
    fistname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    password: DataTypes.STRING,
    email : DataTypes.STRING,
    dob: DataTypes.DATE,
    joindate: DataTypes.DATE,
    enddate: DataTypes.DATE,
    role: DataTypes.STRING
  }, {
    tableName: "resources",
    underscore: true,
    classMethods: {
      associate: models=> {
        Resource.hasMany(models.ResourceContact,{
          as: 'resource_contacts',
          foreignKey: {
            name: "resource_id",
            allowNull: false
          }
        })
        Resource.belongsToMany(models.project,{
          through :models.resource_project_assosiation,
         as : 'project',
          foreignKey : {
            name : "resource_id",
            allowNull: false
          }
        })
        // associations can be defined here
      }
    }
  });
  return Resource;
};
