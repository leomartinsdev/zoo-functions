const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const speciesFound = data.species
    .find((especie) => (animal.includes(especie.name))).residents;
  const checkAge = speciesFound
    .every((idade) => idade.age >= age);
  return checkAge;
};

getAnimalsOlderThan('otters', 7);
module.exports = getAnimalsOlderThan;
