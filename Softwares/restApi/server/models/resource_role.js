'use strict';
module.exports = function(sequelize, DataTypes) {
  var resource_role = sequelize.define('resource_role', {
    r_role: DataTypes.STRING,
    r_startdate: DataTypes.DATE,
    r_lastdate: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        resource_role.hasMany(models.resources,{
          foreignKey:{
            resource_id: "id"
          },
          onDelete:"CASCADE"
        })
        // associations can be defined here
      }
    }
  });
  return resource_role;
};
