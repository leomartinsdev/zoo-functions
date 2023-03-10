const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => data.species
  .filter((elementoId) => ids
    .includes(elementoId.id));

module.exports = getSpeciesByIds;
