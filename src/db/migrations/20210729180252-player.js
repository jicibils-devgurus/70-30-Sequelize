'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'players',
      {
        id: {
          primaryKey: true,
          allowNull: false,
          type: Sequelize.STRING
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        lastname: {
          type: Sequelize.STRING,
          allowNull: false
        },
        nickname: {
          type: Sequelize.STRING,
          allowNull: false
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          field: 'created_at',
          defaultValue: Sequelize.fn('NOW')
        },
        modifiedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          field: 'modified_at',
          defaultValue: Sequelize.fn('NOW')
        },
        createdBy: {
          type: Sequelize.STRING,
          field: 'created_by'
        },
        lastModifiedBy: {
          type: Sequelize.STRING,
          field: 'last_modified_by'
        }
      },
      {
        schema: 'public'
      }
    );
  },
  down: async queryInterface => {
    await queryInterface.dropTable({
      tableName: 'players',
      schema: 'public'
    });
  }
};
