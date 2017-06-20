'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('timeSheets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      timeSheetEntry_id:{
        type:Sequelize.INTEGER,
        references:{
          model:"timeSheetEntries",
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
      t_startdate: {
        type: Sequelize.DATE
      },
      t_enddate: {
        type: Sequelize.DATE
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
    return queryInterface.dropTable('timeSheets');
  }
};
