'use strict';
module.exports = function(sequelize, DataTypes) {
  var timeSheetEntry = sequelize.define('timeSheetEntry', {
    timesheetdate: DataTypes.DATE,
    hours: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        timeSheetEntry.hasMany(models.resources,models.projects,{
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
  return timeSheetEntry;
};
