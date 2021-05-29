const models = require('../models')
const getAllGenres = async (request, response) => {
  const genres = await models.Genres.findAll({ include: [{ model: models.novelGenres }] })

  return response.send(genres) }
const getGenreById = async (request, response) => { const { id } = request.params
  const genre = await models.Genres.findOne({ where: { id }, include: [{ model: models.novelGenres }] })

  return genre ? response.send(genre) : response.sendStatus(404) }

module.exports = { getAllGenres, getGenreById }
