exports.seed = function(knex) {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([
        {
          id:1,
          username: "Erica"
        },
        {
          id:2,
          username: "Del"
        },
        {
          id:3,
          username: "Derek"
        },
        {
          id:4,
          username: "Nico"
        }
      ]);
    });
};
