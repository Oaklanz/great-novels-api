const NovelsModel = require('./novels')
const AuthorsModel = require('./authors')
const GenresModel = require('./genres')
const { Sequelize } = require('sequelize')
const connection = new Sequelize('novels', 'novels', 'Novels123!', { host: 'localhost', dialect: 'mysql' })







const Novels = NovelsModel(connection, Sequelize, Authors)
const Authors = AuthorsModel(connection, Sequelize,)
const Genres = GenresModel(connection, Sequelize)








module.exports = {
  Novels,
  Authors,
  Genres,
}
