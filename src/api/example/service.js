module.exports = () => {
  const { Player } = require('../../db/models');
  const { parseResultsWithPagination } = require('../utils/functions');
  const service = {};

  service.getPlayers = async query => {
    const {
      limit = 50,
      offset = 0,
      sortBy = 'createdAt',
      sortOrder = 'asc'
    } = query;
    const players = await Player.findAndCountAll({
      order: [[sortBy, sortOrder]],
      offset,
      limit
    });
    return parseResultsWithPagination(query, players);
  };

  return service;
};
