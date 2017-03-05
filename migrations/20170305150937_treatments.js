'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('treatments' , function(table) {
    table.increments();
    table.integer('seconds').notNullable();
    table.integer('rating').notNullable();
    table.integer('users_id').notNullable().references('id').inTable('users').onDelete('CASCADE');
    table.timestamps(true,true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('treatments');
};
