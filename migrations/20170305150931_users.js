'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('users' , function(table) {
    table.increments();
    table.string('name').notNullable();
    table.specificType('hashed_password','char(60)').notNullable();
    table.boolean('is_admin').notNullable().defaultTo(false);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
