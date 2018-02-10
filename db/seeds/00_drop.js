
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  let prom1 = knex('currentreads').del()
  let prom2 = knex('users').del()
  return Promise.all([prom1, prom2])
    .then(result => console.log('table dropped'))
    .catch(err => console.error(err))
};
