import { TarifaValueObject } from '../../domain/tarifa.vo';

describe('TarifaValueObject (Nivel 5: Calidad e Invariantes)', () => {
  it('debe calcular correctamente el valor total en pesos colombianos (COP)', () => {
    const tarifa = new TarifaValueObject(10000, 2500, 2375);
    expect(tarifa.totalCop).toBe(14875);
  });

  it('debe arrojar error si se ingresa un valor de flete negativo', () => {
    expect(() => new TarifaValueObject(-5000, 1000, 500)).toThrow(
      'La tarifa y sus recargos no pueden tener valores negativos en COP.',
    );
  });
});
