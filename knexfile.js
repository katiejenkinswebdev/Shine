'use strict';

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/shine_dev'
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/shine_test'
 },

   production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
