'use strict';
module.exports = function(sequelize, DataTypes) {
  var timeSheet = sequelize.define('timeSheet', {
    t_startdate: DataTypes.DATE,
    t_enddate: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        timeSheet.hasMany(models.timeSheetEntries,models.projects,{
          foreignKey :{
            timeSheetEntry_id : "id",
            project_id : "id"
          },
          onDelete:"CASCADE"
        })

        // associations can be defined here
      }
    }
  });
  return timeSheet;
};
