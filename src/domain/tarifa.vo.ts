/**
 * Value Object para el cálculo y validación de tarifas en COP.
 * Restricción Legal: Ley 1480 de 2011 y Regla de Negocio RN-05.
 * Prohibido cobrar fletes negativos o sobrecostos ocultos.
 */
/**
 * TARIFA.VO.TS
 */

export class TarifaValueObject {
  constructor(
    public readonly tarifaBaseCop: number,
    public readonly recargoDistanciaCop: number,
    public readonly ivaCop: number,
  ) {
    if (tarifaBaseCop < 0 || recargoDistanciaCop < 0 || ivaCop < 0) {
      throw new Error('La tarifa y sus recargos no pueden tener valores negativos en COP.');
    }
  }

  public get totalCop(): number {
    return this.tarifaBaseCop + this.recargoDistanciaCop + this.ivaCop;
  }
}
