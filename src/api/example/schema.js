const error = {
  type: 'object',
  properties: {
    errors: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description:
              'unique identifier for this particular occurrence of the problem'
          },
          code: {
            type: 'string',
            enum: ['001'],
            description:
              '> an internal specific error code:- 001: Request schema validation error'
          },
          title: {
            type: 'string',
            description: 'a short, human-readable summary of the problem'
          },
          detail: {
            type: 'string',
            description: 'a human-readable explanation'
          },
          meta: {
            type: 'object',
            description:
              'a meta object containing non-standard meta-information',
            additionalProperties: true
          }
        }
      }
    }
  },
  required: ['errors']
};

const getPlayersSchema = {
  title: 'Get All Players',
  description: 'Method to get all players',

  response: {
    200: {
      type: 'object',
      additionalProperties: true
    },
    '5xx': error
  }
};

module.exports = {
  getPlayersSchema
};
