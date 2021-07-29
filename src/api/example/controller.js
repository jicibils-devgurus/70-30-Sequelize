module.exports = fastify => {
  const service = require('./service')(fastify);

  const getPlayers = async ({ query }, reply) => {
    const players = await service.getPlayers(query);
    reply.send({ data: players });
  };

  return {
    getPlayers
  };
};
