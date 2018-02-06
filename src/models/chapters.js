const baseURL = 'www.mangaeden.com/api/manga/'

const getChapter = (id) => {
  return `${baseURL}${id}`
}

module.exports = { getChapter }
