'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('resource_project_assosiations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      resource_id:{
        type:Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references:{
          model:"resources",
          key : "id"
        },
        allowNull: false,
      },
      project_id:{
        type:Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references:{
          model:"projects",
          key : "id"
        },
        allowNull: false,
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
    return queryInterface.dropTable('resource_project_assosiations');
  }
};
