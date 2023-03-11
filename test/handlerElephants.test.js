const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Retorna número inteiro 4 ao passar argumento count', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Retorna array de nomes que possui Jefferson ao passar names', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('Argumento averageAge retorna número próx a 10.5', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
});
