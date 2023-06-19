const data = require('../data/zoo_data');

// const findEmployee = (info) => {
//   const procuraNome = data.employees
//     .find(({ id, firstName, lastName }) => id === info.id
//     || firstName === info.name || lastName === info.name);
// };


const getEmployeesCoverage = (info) => {
  const empObj = {};
  if (info) {
    const procuraNome = data.employees
      .find(({ id, firstName, lastName }) => id === info.id
        || firstName === info.name || lastName === info.name);
    const employeeId = procuraNome.id;
    const fullName = `${procuraNome.firstName} ${procuraNome.lastName}`;
    const procSpeciesResp = procuraNome.responsibleFor;
    const procSpeciesInfo = data.species.filter((element) => procSpeciesResp.includes(element.id));
    const findSpeciesName = procSpeciesInfo.map((ele) => ele.name);
    const findSpeciesLocations = procSpeciesInfo.map((ele) => ele.location);
    // já recuperei todas as infos do funcionário e do animal responsável. Agora falta retornar isso tudo em um objeto, do jeito que o exercício pede
    // if (typeof procuraNome === 'undefined') {
    //   throw new Error('Informações inválidas');
    // }
    return employeeId;
  }
};

console.log(getEmployeesCoverage({ id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1' })); // name recebe o primeiro nome como parâmetro ou
// getEmployeesCoverage({ name:  'Spry' }); // name recebe o último nome como parâmetro ou
// getEmployeesCoverage({ id:  '4b40a139-d4dc-4f09-822d-ec25e819a5ad' }); // recebe um id como parâmetro

module.exports = getEmployeesCoverage;
