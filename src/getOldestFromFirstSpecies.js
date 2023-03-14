const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const achaFunc = data.employees
    .find((ele) => ele.id === id);
  const achaAnimais = achaFunc.responsibleFor[0];
  const achaSpecies = data.species.find((ele) => ele.id === achaAnimais).residents;
  const achaIdades = achaSpecies.map((ele) => ele.age)
    .sort((a, b) => b - a)[0];
  return Object.values(achaSpecies.find((ele) => ele.age === achaIdades));
};

module.exports = getOldestFromFirstSpecies;
