const NovelsModel = require('./novels')
const AuthorsModel = require('./authors')
const GenresModel = require('./genres')
const { Sequelize } = require('sequelize')







const Novels = NovelsModel(connection, Sequelize, Authors)
const Authors = AuthorsModel(connection, Sequelize,)
const Genres = GenresModel(connection, Sequelize)








module.exports = {
  Novels,
  Authors,
  Genres,
}
