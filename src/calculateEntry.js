const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const faixaEtaria = {
    child: 0, // 20.99
    adult: 0, // 49.99
    senior: 0, // 24.99
  };
  entrants.map((element) => element.age)
    .forEach((elemento) => {
      if (elemento < 18) {
        faixaEtaria.child += 1;
      } else if (elemento >= 18 && elemento < 50) {
        faixaEtaria.adult += 1;
      } else {
        faixaEtaria.senior += 1;
      }
    });
  return faixaEtaria;
};

const calculateEntry = (entrants) => {
  if (!entrants) {
    return 0;
  }
  const listaIdades = Object.values(countEntrants(entrants));
  const valorFinal = listaIdades[0] * 20.99 + listaIdades[1] * 49.99 + listaIdades[2] * 24.99;
  return valorFinal;
};

module.exports = { calculateEntry, countEntrants };
