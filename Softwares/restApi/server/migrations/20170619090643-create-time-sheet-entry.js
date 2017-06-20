'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('timeSheetEntries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      resource_id:{
        type:Sequelize.INTEGER,
        references:{
          model:"resources",
          key : "id"
        }
      },
      project_id:{
        type:Sequelize.INTEGER,
        references:{
          model:"projects",
          key : "id"
        }
      },
      timesheetdate: {
        type: Sequelize.DATE
      },
      hours: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('timeSheetEntries');
  }
};
