'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('resource_roles', {
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
      r_role: {
        type: Sequelize.STRING
      },
      r_startdate: {
        type: Sequelize.DATE
      },
      r_lastdate: {
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
    return queryInterface.dropTable('resource_roles');
  }
};
