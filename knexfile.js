// knexfile.js
// Delaney Patterson, Nico Roldos

'use strict';

const environment = process.env.NODE_ENV || 'development';
const knexConfig = require('./knexfile')[environment];
const knex = require('knex')(knexConfig);

module.exports = knex;



// $ knex migrate:make users

// in users migration file:
