exports.up = function(knex) {
  return knex.schema.createTable('comments', table => {
    table.increments();
    table.string('content').notNullable();
    table.integer('user_id').notNullable().references('id').inTable('users').onDelete('CASCADE');
    table.integer('post_id').notNullable().references('id').inTable('posts').onDelete('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('comments');
}; 
