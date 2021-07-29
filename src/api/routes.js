const exampleSchema = require('./example/schema');

module.exports = async fastify => {
  const exampleController = require('./example/controller')(fastify);

  fastify.route({
    method: 'GET',
    url: '/examples',
    schema: exampleSchema.getPlayersSchema,
    handler: exampleController.getPlayers
  });
};
