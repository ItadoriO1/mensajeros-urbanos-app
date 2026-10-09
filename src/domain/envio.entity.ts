export enum EstadoEnvio {
  CREADO = 'CREADO',
  ASIGNADO = 'ASIGNADO',
  EN_RUTA = 'EN_RUTA',
  ENTREGADO = 'ENTREGADO',
  NOVEDAD = 'NOVEDAD',
}

export class EnvioEntity {
  constructor(
    public readonly id: string,
    public readonly comercioId: string,
    public readonly guia: string,
    public estado: EstadoEnvio,
    public latitudActual: number,
    public longitudActual: number,
    public etaMinutos: number,
    public readonly creadoEn: Date,
  ) {}

  public actualizarUbicacion(lat: number, lon: number, nuevoEta: number): void {
    this.latitudActual = lat;
    this.longitudActual = lon;
    this.etaMinutos = nuevoEta;
  }

  public estaEnRiesgoSla(tiempoMaximoMinutos: number): boolean {
    return this.etaMinutos > tiempoMaximoMinutos;
  }
}
