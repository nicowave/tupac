// posts

exports.seed = function(knex) {
  return knex('posts').del()
    .then(() => {
      return knex('posts').insert([
        {
          id: 1,
          title: 'The Legacy Of Tupac',
          content: 'Born Lesane Parish Crooks but is known by his stage names 2Pac, Makaveli or just Pac He released five albums that all were extremely successful and  considered to still be the greatest and most influential hip hop albums of all time.' ,
          user_id: 1
        },
        {id: 2,
          title: 'Tupac: Spotted in Maryland',
          content: 'Pictures were posted of Tupac in Maryland fishing on a boat. it looks like he has left cuba and has come to the united states. Tupac for President in 2020! ',
          user_id: 2
        },
        {id: 3,
          title: 'Tupac celebrates at club',
          content: 'Celebrating his 45 and 1/2 birthday, Tupac was spotted at club in Cuba. Taking pictures with Rihanna and fans that were able to get close to VIP.',
          user_id: 3
        },
        {id: 4,
          title: 'Who Killed Tupac?',
          content: 'Suge Knight, hands down',
          user_id: 4
        }
      ]);
    });
};
