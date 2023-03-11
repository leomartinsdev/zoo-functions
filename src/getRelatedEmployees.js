const data = require('../data/zoo_data');

const isManager = (id) => {
  const eGerente = data.employees
    .some((elemento) => elemento.managers.includes(id));
  return eGerente;
};

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId) === true) {
    const liderados = data.employees
      .filter((elemento) => elemento.managers.includes(managerId));
    const arrayNomes = [];
    liderados
      .forEach((elemento) => arrayNomes.push(`${elemento.firstName} ${elemento.lastName}`));
    return arrayNomes;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

module.exports = { isManager, getRelatedEmployees };
