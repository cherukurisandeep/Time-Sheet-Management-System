'use strict';
module.exports = function(sequelize, DataTypes) {
  var ResourceContact = sequelize.define('ResourceContact', {
    r_contact_type: DataTypes.STRING,
    r_contact: DataTypes.STRING
  }, {
    tableName: "resource_contacts",
    underscore: true,
    classMethods: {
      associate: function(models) {
        ResourceContact.belongsTo(models.Resource,{
          as:'resources',
          foreignKey :{
            name : "resource_id",
            allowNull: false
          },
          //targetKey: 'id',
          onDelete:"CASCADE"
        })
        // associations can be defined here
      }
    }
  });
  return ResourceContact;
};
