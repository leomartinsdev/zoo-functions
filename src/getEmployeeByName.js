const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (!employeeName) {
    const newObj = {};
    return newObj;
  }
  const findEmployee = data.employees
    .find((funcionario) =>
      employeeName === funcionario.firstName
        || employeeName === funcionario.lastName);
  return findEmployee;
};

module.exports = getEmployeeByName;
