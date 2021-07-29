const fastifyPlugin = require('fastify-plugin');
const statusCodes = require('http').STATUS_CODES;

const VALIDATION_ERROR = '001';

module.exports = fastifyPlugin((fastify, opts, next) => {
  fastify.setNotFoundHandler(async (request, reply) => {
    reply.code(404).send({
      errors: [
        {
          title: 'Not Found'
        }
      ]
    });
  });

  fastify.setErrorHandler(async (error, request, reply) => {
    request.log.error(error);

    const statusCode =
      Array.isArray(error) && error.length
        ? error[0].status
        : error.status ||
          error.statusCode ||
          (error.errors && error.errors.length && error.errors[0].status) ||
          reply.statusCode ||
          reply.res.statusCode ||
          '500';

    if (error.validation) {
      reply.code(400).send({
        errors: [
          {
            code: VALIDATION_ERROR,
            title: 'Validation error',
            detail: error.message
          }
        ]
      });
    }

    let errors;
    if (Array.isArray(error)) {
      errors = error.map(err => ({
        id: err.id,
        code: err.code || statusCodes[statusCode + ''],
        title: err.title,
        detail: err.detail,
        meta: err.meta
      }));
    } else {
      // API ERRORS
      if (error.errors) {
        errors = error.errors;
      } else {
        errors = [
          {
            id: error.id,
            code: error.code || statusCodes[statusCode + ''],
            title: error.title,
            detail: error.detail,
            meta: error.meta
          }
        ];
      }
    }

    reply.code(statusCode).send({ errors });
  });
  next();
});
