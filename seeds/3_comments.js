// comments seed

exports.seed = function(knex) {
  return knex('comments').del()
    .then(() => {
      return knex('comments').insert([
        {
          content: "great!",
          user_id: 1,
          post_id: 3
        },
        {
          content: "awesome sauce!",
          user_id: 4,
          post_id: 1
        },
        {
          content: "this needs work",
          user_id: 2,
          post_id: 4
        },
        {
          content: "i disagree with everthing",
          user_id: 3,
          post_id: 2
        }
      ]);
    });
};
