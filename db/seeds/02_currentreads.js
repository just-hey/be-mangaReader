
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('currentreads').del()
    .then(function () {
      // Inserts seed entries
      return knex('currentreads').insert([
        {id: 1, user_id: 1, manga_title: 'Bleach', manga_title_key: '4e70e9efc092255ef7004274', chapter_name: 'Death &amp; Strawberry', chapter_number: 686, last_viewed_page: '13/13ffe339739c0db953257e061a62c8db12e885ee8a6042cc16695825.jpg', last_viewed_page_number: 28},
        {id: 2, user_id: 2, manga_title: 'Fullmetal Alchemist', manga_title_key: '4e70ea06c092255ef700479d', chapter_name: '99', chapter_number: 99, last_viewed_page: '81/81e4c819a9a9d7f100212e80c347c58ab3bc9fe362a32c04cfefe5f4.jpg', last_viewed_page_number: 1},
        {id: 3, user_id: 3, manga_title: 'Space Dandy', manga_title_key: '53de3b7345b9efc322b54a58', chapter_name: 'All I Want For Space Christmas is You, Baby!', chapter_number: 1, last_viewed_page: '63/63513ec1701441e6baf76f557793f8ea3870447a225b3ad50b9b0d15.jpg', last_viewed_page_number: 0}
      ])
    })
}
