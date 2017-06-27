'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('resource_contacts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      resource_id:{
        type:Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: "resources",
          key: "id"
        },
        allowNull: false
      },
      r_contact_type: {
        type: Sequelize.STRING
      },
      r_contact: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('resource_contacts');
  }
};
