'use strict';

module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert(
      { tableName: 'players', schema: 'public' },
      [
        {
          id: '1',
          name: 'Matias',
          lastname: 'Suarez',
          nickname: 'El pistolero'
        },
        { id: '2', name: 'Leonardo', lastname: 'Ponzio', nickname: 'El Capi' },
        {
          id: '3',
          name: 'Bruno',
          lastname: 'Zuculini',
          nickname: 'El Zucu Champagne'
        },
        { id: '4', name: 'Agustin', lastname: 'Palavecino', nickname: 'Pala' },
        { id: '5', name: 'Enrique', lastname: 'Bologna', nickname: 'Beto' },
        { id: '6', name: 'Robert', lastname: 'Rojas', nickname: 'Sicario' },
        { id: '7', name: 'Jose', lastname: 'Paradela', nickname: '' },
        { id: '8', name: 'Enzo', lastname: 'Perez', nickname: '' },
        { id: '9', name: 'Milton', lastname: 'Casco', nickname: '' },
        { id: '10', name: 'Javier', lastname: 'Pinola', nickname: '' },
        { id: '11', name: 'David', lastname: 'Martinez', nickname: '' },
        { id: '12', name: 'Nico', lastname: 'De la cruz', nickname: '' },
        { id: '13', name: 'Paulo', lastname: 'Diaz', nickname: '' },
        { id: '14', name: 'Franco', lastname: 'Armani', nickname: 'Pulpo' },
        { id: '15', name: 'Frabrizio', lastname: 'Angileri', nickname: '' },
        { id: '16', name: 'Federico', lastname: 'Girotti', nickname: '' },
        {
          id: '17',
          name: 'Jorge',
          lastname: 'Carrascal',
          nickname: 'Carrasca'
        },
        { id: '18', name: 'Gonzalo', lastname: 'Montiel', nickname: 'Cachete' },
        { id: '19', name: 'Jonatan', lastname: 'Maidana', nickname: 'Kratos' },
        { id: '20', name: 'Julian', lastname: 'Alvarez', nickname: '' },
        {
          id: '21',
          name: 'Marcelo Daniel',
          lastname: 'Gallardo',
          nickname: 'Napoleon'
        }
      ]
    );
  },

  down: async queryInterface => {
    await queryInterface.bulkDelete(
      { tableName: 'players', schema: 'public' },
      null,
      {}
    );
  }
};
