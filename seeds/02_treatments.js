'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('treatments').del()
    .then(function () {
      // Inserts seed entries
      return knex('treatments')
      .insert([
        {
          id: 1,
          seconds: 1000,
          rating: 7,
          users_id: 1
          },
        {id: 2,
          seconds: 3000,
          rating: 3,
          users_id: 2
        }
      ]);
  })
  .then(function(){
    return knex.raw("SELECT setval('treatments_id_seq', (SELECT MAX(id) FROM treatments))");
  });
};
