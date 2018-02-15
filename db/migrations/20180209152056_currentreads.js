
exports.up = function(knex, Promise) {
  return knex.schema.createTable('currentreads', table => {
    table.increments()

    table.integer('user_id').notNullable()
    table.foreign('user_id').references('users.id').onDelete('CASCADE')

    table.string('manga_title').notNullable()
    table.string('manga_title_key').notNullable()

    table.string('chapter_name').notNullable().defaultsTo('')
    table.string('chapter_number').notNullable()

    table.string('last_viewed_page').notNullable().defaultsTo('')
    table.integer('last_viewed_page_number').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('currentreads')
};
