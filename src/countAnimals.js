const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (!animal) {
    const todos = {};
    for (let i = 0; i < data.species.length; i += 1) {
      todos[data.species[i].name] = data.species[i].residents.length;
    }
    return todos;
  }
  if (Object.keys(animal).length === 1) {
    return data.species
      .find((especie) => (Object.values(animal).includes(especie.name))).residents.length;
  }
  if (Object.keys(animal).length === 2) {
    const arrFiltered = data.species
      .find((especie) => (Object.values(animal).includes(especie.name))).residents
      .filter((elemento) => JSON.stringify(elemento.sex)
        === JSON.stringify(animal.sex));
    return arrFiltered.length;
  }
};

module.exports = countAnimals;
