/*
slaentity
*/
export class SlaEntity {
  constructor(
    public readonly id: string,
    public readonly servicioTipo: string,
    public readonly tiempoMaximoMinutos: number,
  ) {}
}
