
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Ron', email: 'ron@gmail.com', hashed_password: '$2a$10$x5BXBKwhjo.VCl8A/tuFfuLfEv8narDxPbvx6yMHlG.Y6EreIcCFa'},
        {id: 2, username: 'Cass', email: 'cass@gmail.com', hashed_password: '$2a$10$x5BXBKwhjo.VCl8A/tuFfuLfEv8narDxPbvx6yMHlG.Y6EreIcCFa'},
        {id: 3, username: 'XxXxHaRdC0R3xPATx420x69xXxX', email: 'pat@aol.com', hashed_password: '$2a$10$x5BXBKwhjo.VCl8A/tuFfuLfEv8narDxPbvx6yMHlG.Y6EreIcCFa'}
      ])
    })
    .then(() => {
      return knex.raw(`SELECT setval('users_id_seq', (SELECT MAX (id) FROM users))`)
    })
}
