const baseURL = 'https://www.mangaeden.com/api/manga'

const getChapters = (id) => {
  console.log(`${baseURL}/${id}`)
  axios.get(`${baseURL}/${id}`)
    .then(result => {
      console.log('axios is returning...',result)
    })
}

module.exports = { getChapters }
