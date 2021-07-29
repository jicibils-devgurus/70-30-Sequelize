'use strict';

module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert(
      { tableName: 'players', schema: 'public' },
      [
        { name: 'Matias', lastname: 'Suarez', nickname: 'El pistolero' },
        { name: 'Leonardo', lastname: 'Ponzio', nickname: 'El Capi' },
        { name: 'Bruno', lastname: 'Zuculini', nickname: 'El Zucu Champagne' },
        { name: 'Agustin', lastname: 'Palavecino', nickname: 'Pala' },
        { name: 'Enrique', lastname: 'Bologna', nickname: 'Beto' },
        { name: 'Robert', lastname: 'Rojas', nickname: 'Sicario' },
        { name: 'Jose', lastname: 'Paradela', nickname: '' },
        { name: 'Enzo', lastname: 'Perez', nickname: '' },
        { name: 'Milton', lastname: 'Casco', nickname: '' },
        { name: 'Javier', lastname: 'Pinola', nickname: '' },
        { name: 'David', lastname: 'Martinez', nickname: '' },
        { name: 'Nico', lastname: 'De la cruz', nickname: '' },
        { name: 'Paulo', lastname: 'Diaz', nickname: '' },
        { name: 'Franco', lastname: 'Armani', nickname: 'Pulpo' },
        { name: 'Frabrizio', lastname: 'Angileri', nickname: '' },
        { name: 'Federico', lastname: 'Girotti', nickname: '' },
        { name: 'Jorge', lastname: 'Carrascal', nickname: 'Carrasca' },
        { name: 'Gonzalo', lastname: 'Montiel', nickname: 'Cachete' },
        { name: 'Jonatan', lastname: 'Maidana', nickname: 'Kratos' },
        { name: 'Julian', lastname: 'Alvarez', nickname: '' },
        { name: 'Marcelo Daniel', lastname: 'Gallardo', nickname: 'Napoleon' }
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
