'use strict';
var bcrypt = require('bcrypt');

exports.seed = function(knex, Promise) {
  var hash_pass = bcrypt.hashSync('admin',8);
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users')
      .insert([
        {
          id: 1,
          name: 'Katie',
          hashed_password: hash_pass,
          is_admin: true
        },
        {
          id: 2,
          name: 'Brando',
          hashed_password: hash_pass,
          is_admin: false
        }
      ]);
  })
  .then(function(){
    return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))");
  });
};
