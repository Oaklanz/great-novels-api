const NovelsGenres = (connection, Sequelize, Novels, Genres) => {
  return connection.define('novelsGenres', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, },
    novelsId: { type: Sequelize.INTEGER, references: { model: Novels, Key: 'id' } },
    genresId: { type: Sequelize.INTEGER, references: { model: Genres, key: 'id' } }

  }, { paranoid: true })
}


module.exports = NovelsGenres
