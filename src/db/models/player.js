'use strict';
const { Model, fn } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Player extends Model {}

  Player.init(
    {
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false
      },
      nickname: {
        type: DataTypes.STRING,
        allowNull: false
      },
      createdBy: {
        type: DataTypes.STRING,
        field: 'created_by'
      },
      lastModifiedBy: {
        type: DataTypes.STRING,
        field: 'last_modified_by'
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: fn('NOW')
      },
      modifiedAt: {
        type: DataTypes.DATE,
        field: 'modified_at',
        defaultValue: fn('NOW')
      }
    },
    {
      sequelize,
      modelName: 'Player',
      tableName: 'players',
      updatedAt: 'modifiedAt',
      schema: 'public'
    }
  );

  return Player;
};
