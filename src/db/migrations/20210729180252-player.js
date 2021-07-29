'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(
      'CREATE EXTENSION IF NOT EXISTS "uuid-ossp";'
    );
    await queryInterface.createTable(
      'players',
      {
        id: {
          primaryKey: true,
          allowNull: false,
          type: Sequelize.DataTypes.UUID,
          defaultValue: Sequelize.literal('uuid_generate_v4()')
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
