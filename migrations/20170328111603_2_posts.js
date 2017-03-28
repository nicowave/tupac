

exports.up = function(knex) {
  return knex.schema.createTable('posts', table => {
    table.increments('id').primary()
    table.string('title').notNullable();
    table.string('content').notNullable();
    table.integer('user_id').notNullable().references('id').inTable('users').onDelete('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('posts');
};
