const data = require('../data/zoo_data');

const weekDays = {
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
  Tuesday: {
    officeHour: `Open from ${data.hours.Tuesday.open}am until ${data.hours.Tuesday.close}pm`,
    exhibition: data.species
      .filter((ele) => ele.availability.includes('Tuesday'))
      .map((ele) => ele.name),
  },
  Wednesday: {
    officeHour: `Open from ${data.hours.Wednesday.open}am until ${data.hours.Wednesday.close}pm`,
    exhibition: data.species
      .filter((ele) => ele.availability.includes('Wednesday'))
      .map((ele) => ele.name),
  },
  Thursday: {
    officeHour: `Open from ${data.hours.Thursday.open}am until ${data.hours.Thursday.close}pm`,
    exhibition: data.species
      .filter((ele) => ele.availability.includes('Thursday'))
      .map((ele) => ele.name),
  },
  Friday: {
    officeHour: `Open from ${data.hours.Friday.open}am until ${data.hours.Friday.close}pm`,
    exhibition: data.species
      .filter((ele) => ele.availability.includes('Friday'))
      .map((ele) => ele.name),
  },
  Saturday: {
    officeHour: `Open from ${data.hours.Saturday.open}am until ${data.hours.Saturday.close}pm`,
    exhibition: data.species
      .filter((ele) => ele.availability.includes('Saturday'))
      .map((ele) => ele.name),
  },
  Sunday: {
    officeHour: `Open from ${data.hours.Sunday.open}am until ${data.hours.Sunday.close}pm`,
    exhibition: data.species
      .filter((ele) => ele.availability.includes('Sunday'))
      .map((ele) => ele.name),
  },
};

const listaDeAnimais = data.species.map((ele) => ele.name);
const listaDeDias = Object.keys(weekDays);

const getSchedule = (scheduleTarget) => {
  if (listaDeDias.includes(scheduleTarget)) { // parte 2 -> se o parametro for um dia da semana
    return {
      [scheduleTarget]: weekDays[scheduleTarget],
    };
  }
  if (listaDeAnimais.includes(scheduleTarget)) {
    return data.species // parte 1 feita -> se o parametro for um animal
      .find((ele) => (ele.name.includes(scheduleTarget)))
      .availability;
  }
  return weekDays;
};

module.exports = getSchedule;
