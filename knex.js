// knex.js
// Delaney Patterson, Nico Roldos

'use strict';

module.exports = {
  development:{
    client: 'pg',
    connection: 'postgres://localhost/blog_dev'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/blog_test'
  }
};
