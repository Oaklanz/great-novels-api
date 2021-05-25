const Authors = (connection, Sequelize,) => {
  return connection.define('auhors', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, },
    firstName: { type: Sequelize.STRING },
    lastName: { type: Sequelize.STRING }
  }, { paranoid: true })
}


module.exports = Authors
