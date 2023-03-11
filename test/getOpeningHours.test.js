const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Retorna objeto se não passar argumentos', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('Testa Monday e 09:00-AM', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('Testa Tuesday e 09:00-AM', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('Testa Wednesday e 09:00-PM', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
  it('Testa Thu e 09:00-AM', () => {
    expect(() => { getOpeningHours('Thu', '09:00-AM'); }).toThrow(new Error('The day must be valid. Example: Monday'));
  });
  it('Testa Friday e 09:00-ZM', () => {
    expect(() => { getOpeningHours('Friday', '09:00-ZM'); }).toThrow(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });
  it('Testa Saturday e C9:00-AM', () => {
    expect(() => { getOpeningHours('Saturday', 'C9:00-AM'); }).toThrow(new Error('The hour should represent a number'));
  });
  it('Testa Sunday e 09:c0-AM', () => {
    expect(() => { getOpeningHours('Sunday', '09:c0-AM'); }).toThrow(new Error('The minutes should represent a number'));
  });
});
