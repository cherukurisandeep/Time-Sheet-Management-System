'use strict';
module.exports = function(sequelize, DataTypes) {
  var resource_contact = sequelize.define('resource_contact', {
    r_contact_type: DataTypes.STRING,
    r_contact: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        resource_contact.belongsTo(models.resources,{
          as: 'resource',
          foreignKey :{
            resource_id : "id"
          },
          onDelete:"CASCADE"
        })
        // associations can be defined here
      }
    }
  });
  return resource_contact;
};
